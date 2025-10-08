import { MetricVisitor } from './../parsing/visitors/metricsVisitor';
import { ParserAdapter } from './../parsing/parseAdapter';
import { AnalysisResult } from './analysisResult';

export class CodeSmellAnalyzer {
  private parser: ParserAdapter;

  constructor() {
    this.parser = new ParserAdapter();
  }

  public async analyzeText(text: string, uri?: any): Promise<AnalysisResult[]> {
    console.log('[ApexSentinel][Analyzer] analyzeText start');
    try {
      const parseResult = this.parser.parse(text);
      if (!parseResult) {
        console.log('[ApexSentinel][Analyzer] parseResult is null');
        return [];
      }

      const { tree, parser } = parseResult as any;
      console.log('[ApexSentinel][Analyzer] parse tree object exists:', !!tree);

      // opcional: imprimir representação textual da árvore (útil para debug)
      try {
        const ruleNames = (parser && parser.ruleNames) ? parser.ruleNames : undefined;
        if (tree && (tree as any).toStringTree) {
          console.log('[ApexSentinel][Analyzer] toStringTree:', (tree as any).toStringTree(ruleNames));
        }
      } catch (e) {
        console.warn('[ApexSentinel][Analyzer] toStringTree failed:', e);
      }

      const visitor = new MetricVisitor();
			visitor.visit(tree);
			const metrics = visitor.getMetrics(); // <-- corrigido

			const methods = metrics.get('methods') || [];
			const classMetric = metrics.get('class');


      console.log('[ApexSentinel][Analyzer] metrics extracted:', metrics);

      // Aplicar regras concretas (ex.: long method) — aqui retorno métricas como resultados temporários
      const results: AnalysisResult[] = [];

      for (const m of methods) {
        if (m.lines > 50) {
          results.push(new AnalysisResult('SMELL_LONG_METHOD', { startLine: m.startLine, endLine: m.endLine }, `Método ${m.name} muito longo (${m.lines} linhas)`));
        }
      }

      if (classMetric && classMetric.totalLines > 300) {
        results.push(new AnalysisResult('SMELL_LARGE_CLASS', { startLine: classMetric.startLine || 1, endLine: classMetric.endLine || classMetric.totalLines }, `Classe ${classMetric.name} tem ${classMetric.totalLines} linhas`));
      }

      return results;
    } catch (err) {
      console.error('[ApexSentinel][Analyzer] analyzeText error:', err);
      return [];
    }
  }
}
