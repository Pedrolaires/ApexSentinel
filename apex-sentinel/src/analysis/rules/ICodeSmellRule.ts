// src/analysis/rules/ICodeSmellRule.ts

import { AnalysisResult } from '../analysisResult';
import * as vscode from 'vscode';

/**
 * Representa o contexto da análise, contendo todas as informações
 * necessárias para que uma regra possa ser aplicada.
 */
export interface AnalysisContext {
  metrics: Map<string, any>;
  uri: vscode.Uri;
  // No futuro, podemos adicionar a AST aqui se uma regra precisar dela diretamente.
}

/**
 * A interface que define o contrato para todas as regras de detecção de Code Smell.
 * Este é o coração do Strategy Pattern.
 */
export interface ICodeSmellRule {
  /**
   * O nome identificador da regra (ex: 'longMethod').
   */
  readonly name: string;

  /**
   * Aplica a regra de análise com base no contexto fornecido.
   * @param context O contexto da análise atual.
   * @returns Uma lista de resultados de análise se a regra for violada.
   */
  apply(context: AnalysisContext): AnalysisResult[];
}