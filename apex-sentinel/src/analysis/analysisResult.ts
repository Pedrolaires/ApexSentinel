// src/analysis/analysisResult.ts

import * as vscode from 'vscode';

/**
 * AnalysisResult
 * Define a estrutura de dados para um único resultado de análise (um code smell detectado).
 */
export interface AnalysisResult {
  uri: vscode.Uri;    // O arquivo onde o problema foi encontrado.
  line: number;       // A linha onde o problema começa.
  type: string;       // Um código para o tipo de problema (ex: 'LongMethod').
  message: string;    // A mensagem que será exibida para o usuário.
}