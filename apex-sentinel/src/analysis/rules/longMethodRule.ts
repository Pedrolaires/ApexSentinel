// src/analysis/rules/longMethodRule.ts

import { ICodeSmellRule, AnalysisContext } from './ICodeSmellRule';
import { AnalysisResult } from '../analysisResult';
import * as vscode from 'vscode';

/**
 * Uma implementação concreta (Estratégia) da regra para detectar métodos longos.
 */
export class LongMethodRule implements ICodeSmellRule {
  readonly name = 'longMethod';

  apply(context: AnalysisContext): AnalysisResult[] {
    const results: AnalysisResult[] = [];
    
    // 1. Pega a configuração específica para esta regra.
    const config = vscode.workspace.getConfiguration('apex-sentinel');
    const threshold = config.get<number>(`rules.${this.name}.threshold`, 20);

    // 2. Extrai as métricas necessárias do contexto.
    const methods = context.metrics.get('methods') || [];

    // 3. Aplica a lógica da regra.
    for (const method of methods) {
      if (method.lines > threshold) {
        results.push({
          uri: context.uri,
          line: method.startLine,
          type: 'LONG_METHOD',
          message: `O método "${method.name}" é muito longo (${method.lines} linhas). O máximo configurado é ${threshold}.`,
        });
      }
    }

    return results;
  }
}