import { CodeSmellAnalyzer } from './../analyzer/codeSmellAnalyzer';
import { DiagnosticController } from './diagnosticController';
import * as vscode from 'vscode';

export class UserInterfaceController {
  private analyzer: CodeSmellAnalyzer;
  private diagnostics: DiagnosticController;

  constructor() {
    this.analyzer = new CodeSmellAnalyzer();
    this.diagnostics = new DiagnosticController();
  }

  public async analyzeActiveFile(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('Nenhum arquivo ativo.');
      return;
    }

    const text = editor.document.getText();
    const uri = editor.document.uri;
    const results = await this.analyzer.analyzeText(text, uri);
    this.diagnostics.updateDiagnostics(uri, results);
  }

  /** 🔍 Novo método para ser usado diretamente no extension.ts */
  public async analyzeText(text: string, uri: vscode.Uri) {
    const results = await this.analyzer.analyzeText(text, uri);
    this.diagnostics.updateDiagnostics(uri, results);
    return results;
  }

  public async onTyping(document: vscode.TextDocument) {
    const results = await this.analyzer.analyzeText(document.getText(), document.uri);
    this.diagnostics.updateDiagnostics(document.uri, results);
  }
}
