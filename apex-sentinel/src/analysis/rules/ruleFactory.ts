import { ICodeSmellRule } from './ICodeSmellRule';
import { LongMethodRule } from './longMethodRule';
import { GodClassRule } from './godClassRule';
import { FeatureEnvyRule } from './featureEnvyRule';
import { EmptyCatchBlockRule } from './emptyCatchBlockRule';

export class RuleFactory {
  private static availableRules: Map<string, new () => ICodeSmellRule> = new Map();

  static {
    this.availableRules.set('longMethod', LongMethodRule);
    this.availableRules.set('godClass', GodClassRule);
    this.availableRules.set('featureEnvy', FeatureEnvyRule);
    this.availableRules.set('emptyCatchBlock', EmptyCatchBlockRule);
  }

  public static createAllRules(): ICodeSmellRule[] {
    const rules: ICodeSmellRule[] = [];
    for (const RuleClass of this.availableRules.values()) {
      rules.push(new RuleClass());
    }
    return rules;
  }
}