import { ParserAdapter } from './../parsing/parseAdapter';
import * as vscode from 'vscode';
import { MetricVisitor } from '../parsing/visitors/metricsVisitor';
import { AnalysisResult } from './analysisResult';
import { RuleFactory } from './rules/ruleFactory';
import { ConfigurationManager } from './config/configurationManager';

export class CodeSmellAnalyzer {
  private parserAdapter: ParserAdapter;

  constructor() {
    this.parserAdapter = new ParserAdapter();
  }

  public analyze(code: string, uri: vscode.Uri): { results: AnalysisResult[], metrics: Map<string, any> | undefined } {
    const parseResult = this.parserAdapter.parse(code);
    if (!parseResult) {
      return { results: [], metrics: undefined };
    }

    const visitor = new MetricVisitor();
    visitor.visit(parseResult.tree);
    const metrics = visitor.getMetrics(); 

    const configManager = new ConfigurationManager();
    const allRules = RuleFactory.createAllRules();
    let allResults: AnalysisResult[] = [];

    for (const rule of allRules) {
      const ruleConfig = configManager.getRuleConfig(rule.name);

      if (ruleConfig && ruleConfig.enabled) {
        const context = { metrics, uri, config: ruleConfig };
        const results = rule.apply(context);
        allResults = allResults.concat(results);
      }
    }
    return { results: allResults, metrics: metrics };
  }
}