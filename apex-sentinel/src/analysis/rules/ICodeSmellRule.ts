import { AnalysisResult } from '../analysisResult';
import { RuleConfig } from '../config/configurationManager';
import * as vscode from 'vscode';

export interface AnalysisContext {
  metrics: Map<string, any>;
  uri: vscode.Uri;
  config: RuleConfig; 
}

export interface ICodeSmellRule {
  readonly name: string;
  apply(context: AnalysisContext): AnalysisResult[];
}