import { CodeSmellAnalyzer } from './../analysis/codeSmellAnalyzer';
import * as vscode from 'vscode';
// CORREÇÃO: Usando o nome de arquivo consistente (camelCase).
import { DiagnosticController } from './diagnosticController';

// ... (o resto do arquivo continua o mesmo)
export class UserInterfaceController {
  private analyzer: CodeSmellAnalyzer;
  private diagnosticController: DiagnosticController;

  constructor() {
    this.analyzer = new CodeSmellAnalyzer();
    this.diagnosticController = new DiagnosticController();
  }

  // ... (métodos analyzeActiveFile e analyzeDocument)
  public async analyzeActiveFile(): Promise<void> { /* ... */ }
  public async analyzeDocument(document: vscode.TextDocument): Promise<void> {
    const code = document.getText();
    const uri = document.uri;
    const analysisResults = this.analyzer.analyze(code, uri);
    this.diagnosticController.updateDiagnostics(uri, analysisResults);
  }
}