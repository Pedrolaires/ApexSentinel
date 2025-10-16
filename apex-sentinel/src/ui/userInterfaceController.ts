import * as vscode from 'vscode';
import { CodeSmellAnalyzer } from '../analysis/codeSmellAnalyzer';
import { DiagnosticController } from './diagnosticController';
import { AnalysisResult } from '../analysis/analysisResult';
import { SidebarProvider } from './sidebarProvider';
import { ConfigurationManager, FullConfig } from '../analysis/config/configurationManager';

export class UserInterfaceController {
  private analyzer: CodeSmellAnalyzer;
  private diagnosticController: DiagnosticController;
  private statusBarItem: vscode.StatusBarItem;
  private sidebarProvider: SidebarProvider;
  private configManager: ConfigurationManager;

  constructor(context: vscode.ExtensionContext) {
    this.analyzer = new CodeSmellAnalyzer();
    this.diagnosticController = new DiagnosticController();
    this.sidebarProvider = new SidebarProvider(this);
    this.configManager = new ConfigurationManager();

    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    this.statusBarItem.text = '$(check) Apex Sentinel';
    this.statusBarItem.show();
  }

  public getSidebarProvider(): SidebarProvider {
    return this.sidebarProvider;
  }

  public async analyzeDocument(document: vscode.TextDocument): Promise<void> {
    const code = document.getText();
    const uri = document.uri;
    const analysisResults = this.analyzer.analyze(code, uri);

    this.diagnosticController.updateDiagnostics(uri, analysisResults);
    this.updateStatusBar(analysisResults);
    this.sidebarProvider.updateAnalysisResults(analysisResults);
  }

  public async analyzeActiveFile(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      await this.analyzeDocument(editor.document);
    } else {
      this.updateStatusBar([]);
      this.sidebarProvider.updateAnalysisResults([]);
    }
  }

  public refreshSidebarConfig(): void {
    const currentConfig = this.configManager.getFullConfig();
    this.sidebarProvider.updateConfig(currentConfig);
  }
  
  public async saveConfiguration(newConfig: FullConfig): Promise<void> {
    this.configManager.saveConfig(newConfig);
  }

  private updateStatusBar(results: AnalysisResult[]): void {
    const config = vscode.workspace.getConfiguration('apex-sentinel');
    const penaltyPoints = config.get<number>('scoring.penaltyPoints', 10);

    if (results.length === 0) {
      this.statusBarItem.text = `$(check) Apex Sentinel: 100`;
      this.statusBarItem.tooltip = 'Qualidade do código: Excelente!';
      this.statusBarItem.backgroundColor = undefined;
    } else {
      const score = Math.max(0, 100 - (results.length * penaltyPoints));
      const plural = results.length > 1 ? 's' : '';

      this.statusBarItem.text = `$(warning) Apex Sentinel: ${score}`;
      this.statusBarItem.tooltip = `Qualidade do código: ${score} (${results.length} problema${plural} encontrado${plural})`;
      this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
    }
  }

  public dispose(): void {
    this.statusBarItem.dispose();
  }
}