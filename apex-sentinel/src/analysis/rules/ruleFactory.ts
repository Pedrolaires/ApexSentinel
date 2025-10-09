import { ICodeSmellRule } from './ICodeSmellRule';
import { LongMethodRule } from './longMethodRule';
import * as vscode from 'vscode';

export class RuleFactory {

  private static availableRules: Map<string, new () => ICodeSmellRule> = new Map([
    ['longMethod', LongMethodRule],
  ]);

  public static createActiveRules(): ICodeSmellRule[] {
    const activeRules: ICodeSmellRule[] = [];
    const config = vscode.workspace.getConfiguration('apex-sentinel');

    for (const [name, RuleClass] of this.availableRules.entries()) {
      const isEnabled = config.get<boolean>(`rules.${name}.enabled`, true);
      if (isEnabled) {
        activeRules.push(new RuleClass());
      }
    }

    return activeRules;
  }
}