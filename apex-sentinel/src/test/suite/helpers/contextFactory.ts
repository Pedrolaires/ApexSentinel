import * as vscode from 'vscode';
import { RuleConfig } from '../../../analysis/config/configurationManager';
import { AnalysisContext } from '../../../analysis/rules/ICodeSmellRule';


export function createContext(
  metrics: Map<string, any>,
  config: RuleConfig = { enabled: true },
  ast: any = {} as any
): AnalysisContext {
  return {
    metrics,
    config,
    ast,
    uri: vscode.Uri.file('/tmp/test.cls')
  };
}