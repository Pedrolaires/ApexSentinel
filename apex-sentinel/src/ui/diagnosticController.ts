// src/ui/diagnosticController.ts

import * as vscode from 'vscode';
import { AnalysisResult } from '../analysis/analysisResult';

/**
 * DiagnosticController
 * Gerencia a coleção de diagnósticos (problemas) que são exibidos no editor do VS Code.
 */
export class DiagnosticController {
  // Uma coleção de diagnósticos. É como um "quadro de avisos" para problemas de código.
  private collection: vscode.DiagnosticCollection;

  constructor() {
    // Cria a coleção, associando-a ao nome da nossa extensão.
    this.collection = vscode.languages.createDiagnosticCollection('apex-sentinel');
  }

  /**
   * Atualiza os diagnósticos para um determinado arquivo.
   * @param uri O identificador do arquivo.
   * @param results A lista de problemas encontrados pelo analisador.
   */
  public updateDiagnostics(uri: vscode.Uri, results: AnalysisResult[]): void {
    // Primeiro, limpa os diagnósticos antigos para este arquivo.
    this.collection.delete(uri);

    const diagnostics: vscode.Diagnostic[] = [];

    // Itera sobre cada resultado da análise.
    for (const result of results) {
      // Define o intervalo (range) no código onde o problema foi encontrado.
      const range = new vscode.Range(
        // A linha e coluna no VS Code começam em 0, mas no ANTLR começam em 1.
        new vscode.Position(result.line - 1, 0),
        new vscode.Position(result.line - 1, 80) // Pega a linha inteira para simplificar.
      );

      // Mapeia o tipo de problema para uma severidade do VS Code (Erro, Aviso, etc.).
      const severity = this.mapSeverity(result.type);

      // Cria o objeto de diagnóstico.
      const diagnostic = new vscode.Diagnostic(range, result.message, severity);
      diagnostic.code = result.type; // Adiciona um código para o problema (ex: 'LongMethod').
      diagnostic.source = 'Apex Sentinel'; // Informa a origem do diagnóstico.

      diagnostics.push(diagnostic);
    }

    // Define a nova lista de diagnósticos para o arquivo.
    this.collection.set(uri, diagnostics);
    console.log(`[ApexSentinel] Diagnósticos atualizados: ${diagnostics.length} problema(s) em ${uri.fsPath}`);
  }

  /**
   * Mapeia a severidade do nosso resultado para a severidade do VS Code.
   */
  private mapSeverity(type: string): vscode.DiagnosticSeverity {
    switch (type.toUpperCase()) {
      case 'ERROR':
        return vscode.DiagnosticSeverity.Error;
      case 'LONG_METHOD': // Exemplo de um tipo de code smell
        return vscode.DiagnosticSeverity.Warning;
      default:
        return vscode.DiagnosticSeverity.Information;
    }
  }
}