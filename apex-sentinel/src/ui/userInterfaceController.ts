import * as vscode from 'vscode';
import * as path from 'path';
import { CodeSmellAnalyzer } from '../analysis/codeSmellAnalyzer';
import { ConfigurationManager, FullConfig } from '../analysis/config/configurationManager';
import { ICodeSmellRule } from '../analysis/rules/ICodeSmellRule';
import { RuleFactory } from '../analysis/rules/ruleFactory';
import { DiagnosticController } from './diagnosticController';
import { SidebarProvider } from './sidebarProvider';
import { ISidebarController } from './../analysis/config/ISidebarController';

/**
 * Esta classe é o "Mediador" principal.
 * Ela é instanciada UMA VEZ e coordena todas as outras partes.
 */
export class UserInterfaceController implements ISidebarController { // <-- IMPLEMENTE A INTERFACE
  private context: vscode.ExtensionContext;
  private analyzer: CodeSmellAnalyzer;
  private configManager: ConfigurationManager;
  private diagnosticController: DiagnosticController;
  private sidebarProvider: SidebarProvider;
  
  private allRules: ICodeSmellRule[];
  private activeRules: ICodeSmellRule[] = [];
  
  private fileScores: Map<string, { name: string, score: number }> = new Map();

  constructor(context: vscode.ExtensionContext) {
    this.context = context;

    this.analyzer = new CodeSmellAnalyzer();
    this.diagnosticController = new DiagnosticController();
    this.configManager = new ConfigurationManager();
    // A SidebarProvider agora espera ISidebarController, e esta classe (this) cumpre o contrato
    this.sidebarProvider = new SidebarProvider(this); 

    this.allRules = RuleFactory.createAllRules();
    
    this.updateActiveRules();
    
    this.configManager.onConfigDidChange.event(() => {
      this.handleConfigChange();
    });
  }

  // Getter para o ProviderManager
  public getSidebarProvider(): SidebarProvider {
    return this.sidebarProvider;
  }

  // --- Métodos Chamados por EventManager ---

  public analyzeDocument(document: vscode.TextDocument): void {
    const text = document.getText();
    
    const { results, metrics } = this.analyzer.analyze(
        text, 
        document.uri,
        this.activeRules, 
        this.configManager 
    );
    
    this.diagnosticController.updateDiagnostics(document.uri, results);
    this.sidebarProvider.updateDebugMetrics(metrics);
    this.updateFileScore(document.uri, results.length);
  }

  public handleFileOpen(document: vscode.TextDocument): void {
    this.analyzeDocument(document);
  }

  public handleFileClose(document: vscode.TextDocument): void {
    this.diagnosticController.clearDiagnostics(document.uri);
    this.fileScores.delete(document.uri.fsPath);
    this.refreshSidebarOpenFiles();
  }

  public updateStatusBarForActiveFile(document: vscode.TextDocument | undefined): void {
    // (Lógica para atualizar a barra de status)
  }

  // --- Métodos Chamados pela SidebarProvider (Contrato da ISidebarController) ---

  public async saveConfiguration(config: FullConfig): Promise<void> {
    vscode.window.showWarningMessage('A edição pela UI será sobrescrita pelo "apex-sentinel.json" se ele existir.');
    // No futuro, você pode implementar a escrita no settings.json do VSCODE aqui
  }

  public refreshSidebarConfig(): void {
    this.sidebarProvider.updateConfig(this.configManager.getFullConfig());
  }

  public refreshSidebarOpenFiles(): void {
    this.sidebarProvider.updateOpenFiles(Array.from(this.fileScores.values()));
  }

  // --- Métodos Internos ---

  private handleConfigChange(): void {
    this.updateActiveRules();
    this.refreshSidebarConfig();

    vscode.workspace.textDocuments.forEach(doc => {
      if (doc.languageId === 'apex') {
        this.analyzeDocument(doc);
      }
    });
    vscode.window.showInformationMessage('[Apex Sentinel] Configuração recarregada.');
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
    const score = Math.max(0, baseScore - (issueCount * penalty));
    
    const fileName = path.basename(uri.fsPath);
    this.fileScores.set(uri.fsPath, { name: fileName, score: score });
    
    this.refreshSidebarOpenFiles();
  }

  public dispose(): void {
    this.configManager.dispose();
    this.diagnosticController.dispose();
  }
}