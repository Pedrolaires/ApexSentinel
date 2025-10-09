// src/analysis/rules/ruleFactory.ts

import { ICodeSmellRule } from './ICodeSmellRule';
import { LongMethodRule } from './longMethodRule';
import * as vscode from 'vscode';

// No futuro, importe todas as suas novas classes de regras aqui.
// import { SomeOtherRule } from './someOtherRule';

/**
 * Fábrica responsável por criar instâncias das regras de análise
 * que estão habilitadas nas configurações do usuário.
 */
export class RuleFactory {
  /**
   * Mapeia o nome de uma regra para a sua classe construtora.
   * Para adicionar uma nova regra, basta adicioná-la a este mapa.
   */
  private static availableRules: Map<string, new () => ICodeSmellRule> = new Map([
    ['longMethod', LongMethodRule],
    // ['someOtherRule', SomeOtherRule], // Exemplo de como adicionar outra regra.
  ]);

  /**
   * Cria e retorna uma lista de instâncias de regras que estão ativas.
   * @returns Uma lista de objetos de regra prontos para serem usados.
   */
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