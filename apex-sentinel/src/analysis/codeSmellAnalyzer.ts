import * as vscode from 'vscode';
import { ParserAdapter } from './../parsing/parseAdapter';
import { MetricVisitor } from '../parsing/visitors/metricsVisitor';
import { AnalysisResult } from './analysisResult';
import { RuleFactory } from './rules/ruleFactory';

/**
 * CodeSmellAnalyzer
 * Orquestra o processo de análise. Agora ele não conhece mais as regras,
 * apenas as executa.
 */
export class CodeSmellAnalyzer {
  private parserAdapter: ParserAdapter;

  constructor() {
    this.parserAdapter = new ParserAdapter();
  }

  public analyze(code: string, uri: vscode.Uri): AnalysisResult[] {
    // 1. O parse e a extração de métricas continuam iguais.
    const parseResult = this.parserAdapter.parse(code);
    if (!parseResult) {
      return [];
    }
    
    const visitor = new MetricVisitor();
    visitor.visit(parseResult.tree);
    const metrics = visitor.getMetrics();

    // 2. Pede à fábrica a lista de regras ativas.
    const activeRules = RuleFactory.createActiveRules();
    
    // 3. Prepara o contexto da análise.
    const context = { metrics, uri };

    // 4. Executa cada regra ativa e acumula os resultados.
    // O grande bloco de 'if' foi substituído por este loop elegante.
    let allResults: AnalysisResult[] = [];
    for (const rule of activeRules) {
      const results = rule.apply(context);
      allResults = allResults.concat(results);
    }
    
    return allResults;
  }
}