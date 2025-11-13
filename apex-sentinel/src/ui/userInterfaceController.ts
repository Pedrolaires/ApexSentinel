import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { CodeSmellAnalyzer } from '../analysis/codeSmellAnalyzer';
import { ConfigurationManager, FullConfig } from '../analysis/config/configurationManager';
import { ICodeSmellRule } from '../analysis/rules/ICodeSmellRule';
import { RuleFactory } from '../analysis/rules/ruleFactory';
import { DiagnosticController } from './diagnosticController';
import { SidebarProvider } from './sidebarProvider';
import { ISidebarController } from './../analysis/config/ISidebarController';

export class UserInterfaceController implements ISidebarController {
  private analyzer: CodeSmellAnalyzer;
  private configManager: ConfigurationManager;
  private diagnosticController: DiagnosticController;
  public sidebarProvider: SidebarProvider;
  private allRules: ICodeSmellRule[];
  private activeRules: ICodeSmellRule[] = [];
  private fileScores: Map<string, { name: string, score: number }> = new Map();
  private statusBarItem: vscode.StatusBarItem;

  constructor(private readonly context: vscode.ExtensionContext) {
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    this.statusBarItem.text = '$(shield) Apex Sentinel';
    this.statusBarItem.show();

    this.analyzer = new CodeSmellAnalyzer();
    this.diagnosticController = new DiagnosticController();
    this.configManager = new ConfigurationManager();
    this.sidebarProvider = new SidebarProvider(context, this);

    this.allRules = RuleFactory.createAllRules();
    this.updateActiveRules();

    this.configManager.onConfigDidChange.event(() => {
      this.handleConfigChange();
    });
  }

  public analyzeDocument(document: vscode.TextDocument): void {
    const text = document.getText();
    const { results, metrics } = this.analyzer.analyze(
      text,
      document.uri,
      this.activeRules,
      this.configManager
    );

    this.diagnosticController.updateDiagnostics(document.uri, results);
    this.updateFileScore(document.uri, results.length);

    // Atualiza UI
    if (metrics) {
      this.sidebarProvider.updateDebugMetrics(metrics);
    }
    this.refreshSidebarOpenFiles();
    this.updateStatusBarForActiveFile(document);
  }

  public handleFileOpen(document: vscode.TextDocument): void {
    this.analyzeDocument(document);
  }

  public handleFileClose(document: vscode.TextDocument): void {
    this.diagnosticController.clearDiagnostics(document.uri);
    this.fileScores.delete(document.uri.fsPath);
    this.refreshSidebarOpenFiles();
  }

  public updateStatusBarForActiveFile(document?: vscode.TextDocument): void {
    if (!document) {
      this.statusBarItem.text = `$(shield) Apex Sentinel`;
      return;
    }

    const scoreData = this.fileScores.get(document.uri.fsPath);
    const score = scoreData?.score ?? 100;

    this.statusBarItem.text = `$(shield) Quality: ${score}`;
    this.statusBarItem.tooltip = 'Pontuação de qualidade do código Apex';
  }

  public async saveConfiguration(config: FullConfig): Promise<void> {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      vscode.window.showErrorMessage('[Apex Sentinel] Nenhum workspace aberto.');
      return;
    }

    const rootPath = workspaceFolders[0].uri.fsPath;
    const configPath = path.join(rootPath, 'apex-sentinel.json');
    const jsonString = JSON.stringify(config, null, 2);

    try {
      fs.writeFileSync(configPath, jsonString, 'utf-8');
      vscode.window.showInformationMessage('[Apex Sentinel] Configuração salva com sucesso.');
      this.refreshSidebarConfig();
    } catch (e) {
      vscode.window.showErrorMessage(`[Apex Sentinel] Erro ao salvar configuração: ${e}`);
    }
  }

  public refreshSidebarConfig(): void {
    const config = this.configManager.getFullConfig();
    this.sidebarProvider.updateConfig(config);
  }

  public refreshSidebarOpenFiles(): void {
    const openFiles = Array.from(this.fileScores.values());
    this.sidebarProvider.updateOpenFiles(openFiles);
  }

  private handleConfigChange(): void {
    this.updateActiveRules();
    this.refreshSidebarConfig();

    vscode.workspace.textDocuments.forEach(doc => {
      if (doc.languageId === 'apex') {
        this.analyzeDocument(doc);
      }
    });
  }

  private updateActiveRules(): void {
    this.activeRules = this.allRules.filter(rule => {
      const config = this.configManager.getRuleConfig(rule.name);
      return config.enabled;
    });
  }

  private updateFileScore(uri: vscode.Uri, issueCount: number): void {
    const baseScore = 100;
    const penalty = 10;
    const score = Math.max(0, baseScore - issueCount * penalty);
    const fileName = path.basename(uri.fsPath);
    this.fileScores.set(uri.fsPath, { name: fileName, score });
  }

  public dispose(): void {
    this.statusBarItem.dispose();
    this.configManager.dispose();
    this.diagnosticController.dispose();
  }
}
