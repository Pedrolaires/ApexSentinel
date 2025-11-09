import { ICodeSmellRule, AnalysisContext } from './ICodeSmellRule';
import { AnalysisResult } from '../analysisResult';

export class FeatureEnvyRule implements ICodeSmellRule {
  readonly name = 'featureEnvy';

  apply(context: AnalysisContext): AnalysisResult[] {
    const results: AnalysisResult[] = [];
    
    const atfdThreshold = context.config.atfdThreshold || 5;

    const methods = context.metrics.get('methods') || [];

    for (const method of methods) {
      if (method.atfd > atfdThreshold) {
        results.push({
          uri: context.uri,
          line: method.startLine,
          type: 'FEATURE_ENVY',
          message: `O método "${method.name}" tem acesso a muitos dados (${method.atfd}) de outras classes (Feature Envy). Considere mover este método para a classe onde ele é mais utilizado.`,
        });
      }
    }
    return results;
  }
}