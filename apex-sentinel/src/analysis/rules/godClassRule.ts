import { ICodeSmellRule, AnalysisContext } from './ICodeSmellRule';
import { AnalysisResult } from '../analysisResult';

export class GodClassRule implements ICodeSmellRule {
  readonly name = 'godClass';

  apply(context: AnalysisContext): AnalysisResult[] {
    const results: AnalysisResult[] = [];

    const nomThreshold = context.config.nomThreshold || 15;
    const noaThreshold = context.config.noaThreshold || 10;
    const wmcThreshold = context.config.wmcThreshold || 47;
    const lcomThreshold = context.config.lcomThreshold || 10;

    const classMetrics = context.metrics.get('class');

    if (classMetrics) {
      let isSmelly = false;
      let reason = '';

      if (classMetrics.wmc > wmcThreshold && classMetrics.lcom > lcomThreshold) {
        isSmelly = true;
        reason = `possui WMC muito alto (${classMetrics.wmc}) e baixa coesão (LCOM: ${classMetrics.lcom})`;
      } else if (classMetrics.nom > nomThreshold) {
        isSmelly = true;
        reason = `possui ${classMetrics.nom} métodos (limite: ${nomThreshold})`;
      } else if (classMetrics.noa > noaThreshold) {
        isSmelly = true;
        reason = `possui ${classMetrics.noa} atributos (limite: ${noaThreshold})`;
      }

      if (isSmelly) {
        results.push({
          uri: context.uri,
          line: classMetrics.startLine,
          type: 'GOD_CLASS',
          message: `A classe "${classMetrics.name}" pode ser uma God Class: ${reason}. Considere dividir responsabilidades.`,
        });
      }
    }
    return results;
  }
}