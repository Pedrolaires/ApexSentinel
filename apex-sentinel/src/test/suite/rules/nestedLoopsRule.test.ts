import * as assert from 'assert';
import { NestedLoopsRule } from '../../../analysis/rules/nestedLoopsRule';
import { createContext } from '../helpers/contextFactory';
import { getMetricsFromFixture } from '../helpers/parser';
import { RuleConfig } from '../../../analysis/config/configurationManager';

describe('NestedLoopsRule — Unit and Integration tests', () => {

  describe('Unit tests (manual metrics)', () => {
    it('does not report when depth <= threshold', () => {
      const metrics = new Map<string, any>();
      metrics.set('nestedLoopsDepth', 1);

      const ctx = createContext(
        metrics,
        { enabled: true, threshold: 1 } as RuleConfig,
        null
      );

      const rule = new NestedLoopsRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 0);
    });
  });

  describe('Integration tests (AST + MetricVisitor + Rule)', () => {

    it('reports for nestedLoops_deep.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('nestedLoops_deep.cls');

      const ctx = createContext(
        metrics,
        { enabled: true, threshold: 1 } as RuleConfig,
        ast
      );

      const rule = new NestedLoopsRule();
      const res = rule.apply(ctx);

      assert.ok(res.length >= 1, 'esperado aviso para loops profundos');
      assert.ok(res.some(r => r.type === 'NESTED_LOOPS'));
    });

    it('does NOT report for nestedLoops_shallow.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('nestedLoops_shallow.cls');

      const ctx = createContext(
        metrics,
        { enabled: true, threshold: 1 } as RuleConfig,
        ast
      );

      const rule = new NestedLoopsRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 0);
    });

    it('does NOT report for noNestedLoops.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('noNestedLoops.cls');

      const ctx = createContext(
        metrics,
        { enabled: true, threshold: 1 } as RuleConfig,
        ast
      );

      const rule = new NestedLoopsRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 0);
    });

  });
});
