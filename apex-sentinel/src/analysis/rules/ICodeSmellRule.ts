import { AnalysisResult } from '../analysisResult';
import * as vscode from 'vscode';

export interface AnalysisContext {
  metrics: Map<string, any>;
  uri: vscode.Uri;
}

export interface ICodeSmellRule {
  readonly name: string;
  apply(context: AnalysisContext): AnalysisResult[];
}