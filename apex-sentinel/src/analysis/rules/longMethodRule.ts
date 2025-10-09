import { ICodeSmellRule, AnalysisContext } from './ICodeSmellRule';
import { AnalysisResult } from '../analysisResult';
import * as vscode from 'vscode';

export class LongMethodRule implements ICodeSmellRule {
  readonly name = 'longMethod';

  apply(context: AnalysisContext): AnalysisResult[] {
    const results: AnalysisResult[] = [];
    
    const config = vscode.workspace.getConfiguration('apex-sentinel');
    const threshold = config.get<number>(`rules.${this.name}.threshold`, 20);

    const methods = context.metrics.get('methods') || [];

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