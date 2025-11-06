import { ICodeSmellRule } from './ICodeSmellRule';
import { LongMethodRule } from './longMethodRule';
import { GodClassRule } from './godClassRule';

export class RuleFactory {
  private static availableRules: Map<string, new () => ICodeSmellRule> = new Map();

  static {
    this.availableRules.set('longMethod', LongMethodRule);
    this.availableRules.set('godClass', GodClassRule);
  }

  public static createAllRules(): ICodeSmellRule[] {
    const rules: ICodeSmellRule[] = [];
    for (const RuleClass of this.availableRules.values()) {
      rules.push(new RuleClass());
    }
    return rules;
  }
}