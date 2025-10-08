import * as vscode from 'vscode';
import { AnalysisResult } from '../analyzer/analysisResult';

export class DiagnosticController {
  private collection: vscode.DiagnosticCollection;

  constructor() {
    this.collection = vscode.languages.createDiagnosticCollection('apex-sentinel');
  }

  public updateDiagnostics(uri: vscode.Uri, results: AnalysisResult[]) {
    const diagnostics: vscode.Diagnostic[] = [];

    for (const result of results) {
      const loc = result.location || { startLine: 1, startCol: 0, endLine: 1, endCol: 0 };

      const startLine = Math.max(0, (loc.startLine ?? 1) - 1);
      const endLine = Math.max(startLine, (loc.endLine ?? loc.startLine ?? 1) - 1);

      const startCol = Math.max(0, loc.startCol ?? 0);
      const endCol = Math.max(0, loc.endCol ?? 80);

      const range = new vscode.Range(
        new vscode.Position(startLine, startCol),
        new vscode.Position(endLine, endCol)
      );

      const severity = this.mapSeverity(result.type);

      const diag = new vscode.Diagnostic(range, result.message, severity);
      // opcional: adicionar código/ID para referência
      diag.code = result.type;
      diagnostics.push(diag);
    }

    this.collection.set(uri, diagnostics);
    console.log(`[ApexSentinel][Diagnostics] Atualizado: ${diagnostics.length} problema(s) no ${uri.fsPath}`);
  }

  public clear(uri: vscode.Uri) {
    this.collection.delete(uri);
  }

  private mapSeverity(type: string): vscode.DiagnosticSeverity {
    if (!type) {return vscode.DiagnosticSeverity.Information;}
    const t = type.toUpperCase();
    if (t.includes('ERROR') || t.includes('CRITICAL')) {return vscode.DiagnosticSeverity.Error;}
    if (t.includes('SMELL') || t.includes('LONG') || t.includes('LARGE') || t.includes('WARN')) {return vscode.DiagnosticSeverity.Warning;}
    return vscode.DiagnosticSeverity.Information;
  }
}
