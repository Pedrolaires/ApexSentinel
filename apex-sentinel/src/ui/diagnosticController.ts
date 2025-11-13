import * as vscode from 'vscode';
import { AnalysisResult } from '../analysis/analysisResult';

export class DiagnosticController {
  private collection: vscode.DiagnosticCollection;

  constructor() {
    this.collection = vscode.languages.createDiagnosticCollection('apex-sentinel');
  }

  
  public updateDiagnostics(uri: vscode.Uri, results: AnalysisResult[]): void {
    this.collection.delete(uri);

    const diagnostics: vscode.Diagnostic[] = [];

    for (const result of results) {
      const range = new vscode.Range(
        new vscode.Position(result.line - 1, 0),
        new vscode.Position(result.line - 1, 80)
      );

      const severity = this.mapSeverity(result.type);

      const diagnostic = new vscode.Diagnostic(range, result.message, severity);
      diagnostic.code = result.type;
      diagnostic.source = 'Apex Sentinel';

      diagnostics.push(diagnostic);
    }

    this.collection.set(uri, diagnostics);
  }

  public clearDiagnostics(uri: vscode.Uri): void {
    this.collection.delete(uri);
  }
  public dispose(): void {
    this.collection.dispose();
  }


  private mapSeverity(type: string): vscode.DiagnosticSeverity {
    switch (type.toUpperCase()) {
      case 'ERROR':
        return vscode.DiagnosticSeverity.Error;
      case 'LONG_METHOD':
      case 'GOD_CLASS':
      case 'FEATURE_ENVY':
      case 'EMPTY_CATCH_BLOCK':
      case 'MAGIC_NUMBER':
      case 'NESTED_LOOPS':
        return vscode.DiagnosticSeverity.Warning;
      default:
        return vscode.DiagnosticSeverity.Information;
    }
  }
}