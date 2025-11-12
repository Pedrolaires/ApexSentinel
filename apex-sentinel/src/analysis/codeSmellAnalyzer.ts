import * as vscode from 'vscode';
import { ParserAdapter } from './../parsing/parseAdapter';
import { MetricVisitor } from '../parsing/visitors/metricsVisitor';
import { AnalysisResult } from './analysisResult';
import { ConfigurationManager, RuleConfig } from './config/configurationManager';
import { ICodeSmellRule } from './rules/ICodeSmellRule';

export class CodeSmellAnalyzer {
  private parserAdapter: ParserAdapter;

  constructor() {
    this.parserAdapter = new ParserAdapter();
  }

 public analyze(
    code: string,
    uri: vscode.Uri,
    activeRules: ICodeSmellRule[],
    configManager: ConfigurationManager
  ): { results: AnalysisResult[], metrics: Map<string, any> | undefined } {
    
    const parseResult = this.parserAdapter.parse(code);
    if (!parseResult) {
      return { results: [], metrics: undefined };
    }

    const visitor = new MetricVisitor();
    visitor.visit(parseResult.tree);
    const newMetrics = visitor.getMetrics();

    let allResults: AnalysisResult[] = [];

    for (const rule of activeRules) {
      const ruleConfig = configManager.getRuleConfig(rule.name);
      if (ruleConfig && ruleConfig.enabled) {
        const context = { metrics: newMetrics, uri, config: ruleConfig, ast: parseResult.tree };
        const results = rule.apply(context);
        allResults = allResults.concat(results);
      }
    }

    return { results: allResults, metrics: newMetrics };
  }

  public clearCacheForFile(filePath: string): void {
  }
}