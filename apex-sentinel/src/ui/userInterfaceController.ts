import { CodeSmellAnalyzer } from './../analysis/codeSmellAnalyzer';
import * as vscode from 'vscode';
import { DiagnosticController } from './diagnosticController';

export class UserInterfaceController {
  private analyzer: CodeSmellAnalyzer;
  private diagnosticController: DiagnosticController;

  constructor() {
    this.analyzer = new CodeSmellAnalyzer();
    this.diagnosticController = new DiagnosticController();
  }

  public async analyzeActiveFile(): Promise<void> { /* ... */ }
  public async analyzeDocument(document: vscode.TextDocument): Promise<void> {
    const code = document.getText();
    const uri = document.uri;
    const analysisResults = this.analyzer.analyze(code, uri);
    this.diagnosticController.updateDiagnostics(uri, analysisResults);
  }
}