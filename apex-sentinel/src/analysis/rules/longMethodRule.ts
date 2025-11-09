import { ICodeSmellRule, AnalysisContext } from './ICodeSmellRule';
import { AnalysisResult } from '../analysisResult';

export class LongMethodRule implements ICodeSmellRule {
  readonly name = 'longMethod';

  apply(context: AnalysisContext): AnalysisResult[] {
    const results: AnalysisResult[] = [];
    
    const locThreshold = context.config.threshold || 20;
    const nopThreshold = context.config.nopThreshold || 5;

    const methods = context.metrics.get('methods') || [];

    for (const method of methods) {
      let isSmelly = false;
      let reason = '';

      if (method.lines > locThreshold) {
        isSmelly = true;
        reason = `possui ${method.lines} linhas (limite: ${locThreshold})`;
      } else if (method.nop > nopThreshold) { 
        isSmelly = true;
        reason = `possui ${method.nop} parâmetros (limite: ${nopThreshold})`;
      }

      if (isSmelly) {
        results.push({
          uri: context.uri,
          line: method.startLine,
          type: 'LONG_METHOD',
          message: `O método "${method.name}" parece complexo: ${reason}.`,
        });
      }
    }
    return results;
  }
}