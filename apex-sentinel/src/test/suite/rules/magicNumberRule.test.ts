import * as assert from 'assert';
import { createContext } from '../helpers/contextFactory';
import { getMetricsFromFixture } from '../helpers/parser';
import { RuleConfig } from '../../../analysis/config/configurationManager';
import { MagicNumberRule } from '../../../analysis/rules/magicNumberRule';

describe('MagicNumberRule — Unit and Integration tests', () => {

  describe('Integration tests (AST + MetricVisitor)', () => {
    it('reports simpleMagic.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('simpleMagic.cls');
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, ast);

      const rule = new MagicNumberRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 1);
    });

    it('does NOT report allowedValues.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('allowedValues.cls');
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, ast);

      const rule = new MagicNumberRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 0);
    });

    it('reports all magic numbers in multipleMagic.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('multipleMagic.cls');
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, ast);

      const rule = new MagicNumberRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 3);
    });
  });

});
