import { ICodeSmellRule } from './ICodeSmellRule';
import { LongMethodRule } from './longMethodRule';

export class RuleFactory {
  private static availableRules: Map<string, new () => ICodeSmellRule> = new Map([
    ['longMethod', LongMethodRule],
  ]);

  public static createAllRules(): ICodeSmellRule[] {
    const rules: ICodeSmellRule[] = [];
    for (const RuleClass of this.availableRules.values()) {
      rules.push(new RuleClass());
    }
    return rules;
  }
}