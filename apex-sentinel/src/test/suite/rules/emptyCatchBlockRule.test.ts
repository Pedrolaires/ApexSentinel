import * as assert from 'assert';
import { EmptyCatchBlockRule } from '../../../analysis/rules/emptyCatchBlockRule';
import { createContext } from '../helpers/contextFactory';
import { getMetricsFromFixture } from '../helpers/parser';
import { RuleConfig } from '../../../analysis/config/configurationManager';

describe('EmptyCatchBlockRule — Unit and Integration tests', () => {
    
  describe('Integration tests (AST + MetricVisitor + Rule)', () => {

    it('reports for emptyCatch.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('emptyCatch.cls');
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, ast);

      const rule = new EmptyCatchBlockRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 1, 'deve detectar exatamente 1 catch vazio');
      assert.strictEqual(res[0].type, 'EMPTY_CATCH_BLOCK');
    });

    it('does NOT report for catchWithDebug.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('catchWithDebug.cls');
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, ast);

      const rule = new EmptyCatchBlockRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 0);
    });

    it('reports ONLY the empty catch in multipleCatches.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('multipleCatches.cls');
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, ast);

      const rule = new EmptyCatchBlockRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 1, 'deve reportar apenas o segundo catch (vazio)');
    });

  });

});
