import * as vscode from 'vscode';
import { CodeSmellAnalyzer } from '../analysis/codeSmellAnalyzer';
import { DiagnosticController } from './diagnosticController';
import { AnalysisResult } from '../analysis/analysisResult';
import { SidebarProvider } from './sidebarProvider';
import { ConfigurationManager, FullConfig } from '../analysis/config/configurationManager';
import * as path from 'path';

export class UserInterfaceController {
  private analyzer: CodeSmellAnalyzer;
  private diagnosticController: DiagnosticController;
  private statusBarItem: vscode.StatusBarItem;
  private sidebarProvider: SidebarProvider;
  private configManager: ConfigurationManager;

  private openFileScores: Map<string, number> = new Map();

  constructor(context: vscode.ExtensionContext) {
    this.analyzer = new CodeSmellAnalyzer();
    this.diagnosticController = new DiagnosticController();
    this.sidebarProvider = new SidebarProvider(this);
    this.configManager = new ConfigurationManager();

    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    this.statusBarItem.text = '$(check) Apex Sentinel';
    this.statusBarItem.show();

    this.initializeOpenFileState();
  }

  private initializeOpenFileState(): void {
    vscode.window.visibleTextEditors.forEach(editor => {
      if (editor.document.languageId === 'apex') {
        this.handleFileOpen(editor.document);
      }
    });
  }

  public handleFileOpen(document: vscode.TextDocument): void {
    const filePath = document.uri.fsPath;
    if (!this.openFileScores.has(filePath)) {
      this.openFileScores.set(filePath, 100);
      this.refreshSidebarOpenFiles();
      this.analyzeDocument(document);
    }
  }

  public handleFileClose(document: vscode.TextDocument): void {
    const filePath = document.uri.fsPath;
    if (this.openFileScores.has(filePath)) {
      this.openFileScores.delete(filePath);
      this.refreshSidebarOpenFiles();
    }
  }

  public refreshSidebarOpenFiles(): void {
    const sortedFiles = Array.from(this.openFileScores.entries())
      .sort(([, scoreA], [, scoreB]) => scoreA - scoreB)
      .map(([filePath, score]) => ({
        name: path.basename(filePath),
        score: score,
      }));
    
    this.sidebarProvider.updateOpenFiles(sortedFiles);
  }

  public getSidebarProvider(): SidebarProvider {
    return this.sidebarProvider;
  }

  public async analyzeDocument(document: vscode.TextDocument): Promise<void> {
    const code = document.getText();
    const uri = document.uri;
    const analysisResults = this.analyzer.analyze(code, uri);

    const score = this.calculateScore(analysisResults);
    this.openFileScores.set(uri.fsPath, score);

    // Atualiza diagnósticos e barra de status
    this.diagnosticController.updateDiagnostics(uri, analysisResults);
    this.updateStatusBar(analysisResults);

    this.refreshSidebarConfig();
    this.refreshSidebarOpenFiles();
    this.sidebarProvider.updateAnalysisResults(analysisResults);
  }
  
  public refreshSidebarConfig(): void {
    const currentConfig = this.configManager.getFullConfig();
    this.sidebarProvider.updateConfig(currentConfig);
  }
  
  public async saveConfiguration(newConfig: FullConfig): Promise<void> {
    this.configManager.saveConfig(newConfig);
    await this.analyzeActiveFile();
  }

  private calculateScore(results: AnalysisResult[]): number {
    const config = vscode.workspace.getConfiguration('apex-sentinel');
    const penaltyPoints = config.get<number>('scoring.penaltyPoints', 10);
    return Math.max(0, 100 - (results.length * penaltyPoints));
  }

  private updateStatusBar(results: AnalysisResult[]): void {
    const score = this.calculateScore(results);
    if (results.length === 0) {
      this.statusBarItem.text = `$(check) Apex Sentinel: 100`;
      this.statusBarItem.tooltip = 'Qualidade do código: Excelente!';
      this.statusBarItem.backgroundColor = undefined;
    } else {
      const plural = results.length > 1 ? 's' : '';
      this.statusBarItem.text = `$(warning) Apex Sentinel: ${score}`;
      this.statusBarItem.tooltip = `Qualidade do código: ${score} (${results.length} problema${plural} encontrado${plural})`;
      this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
    }
  }

  public updateStatusBarForActiveFile(document: vscode.TextDocument | undefined): void {
    if (!document || document.languageId !== 'apex') {
      this.statusBarItem.text = '$(check) Apex Sentinel';
      this.statusBarItem.tooltip = 'Nenhum arquivo Apex ativo.';
      this.statusBarItem.backgroundColor = undefined;
      return;
    }

    const filePath = document.uri.fsPath;
    const score = this.openFileScores.get(filePath) ?? 100;

    if (score === 100) {
      this.statusBarItem.text = `$(check) Apex Sentinel: 100`;
      this.statusBarItem.tooltip = 'Qualidade do código: Excelente!';
      this.statusBarItem.backgroundColor = undefined;
    } else {
      const config = vscode.workspace.getConfiguration('apex-sentinel');
      const penaltyPoints = config.get<number>('scoring.penaltyPoints', 10);
      const estimatedProblems = Math.round((100 - score) / penaltyPoints);
      const plural = estimatedProblems !== 1 ? 's' : '';

      this.statusBarItem.text = `$(warning) Apex Sentinel: ${score}`;
      this.statusBarItem.tooltip = `Qualidade do código: ${score} (${estimatedProblems} problema${plural} estimado${plural})`;
      this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
    }
  }

  public async analyzeActiveFile(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      await this.analyzeDocument(editor.document);
    } else {
      this.updateStatusBar([]);
      this.sidebarProvider.updateAnalysisResults([]);
      this.refreshSidebarConfig();
      this.refreshSidebarOpenFiles();
    }
  }
  
  public dispose(): void {
    this.statusBarItem.dispose();
  }
}