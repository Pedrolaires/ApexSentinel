import * as vscode from 'vscode';
import { ParserAdapter } from './../parsing/parseAdapter';
import { MetricVisitor } from '../parsing/visitors/metricsVisitor';
import { AnalysisResult } from './analysisResult';
import { RuleFactory } from './rules/ruleFactory';

export class CodeSmellAnalyzer {
  private parserAdapter: ParserAdapter;

  constructor() {
    this.parserAdapter = new ParserAdapter();
  }

  public analyze(code: string, uri: vscode.Uri): AnalysisResult[] {
    const parseResult = this.parserAdapter.parse(code);
    if (!parseResult) {
      return [];
    }
    
    const visitor = new MetricVisitor();
    visitor.visit(parseResult.tree);
    const metrics = visitor.getMetrics();
    const activeRules = RuleFactory.createActiveRules();
    const context = { metrics, uri };

    let allResults: AnalysisResult[] = [];
    for (const rule of activeRules) {
      const results = rule.apply(context);
      allResults = allResults.concat(results);
    }
    
    return allResults;
  }
}