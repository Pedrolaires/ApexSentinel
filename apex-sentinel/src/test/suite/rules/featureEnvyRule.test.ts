import * as assert from 'assert';
import { createContext } from '../helpers/contextFactory';
import { getMetricsFromFixture } from '../helpers/parser';
import { FeatureEnvyRule } from '../../../analysis/rules/featureEnvyRule';
import { RuleConfig } from '../../../analysis/config/configurationManager';

describe('FeatureEnvyRule — Unit and Integration tests', () => {

  describe('Unit tests (manual metrics)', () => {
    it('detects ATFD above threshold', () => {
      const metrics = new Map<string, any>();
      metrics.set('methods', [
        { name: 'm1', startLine: 10, atfd: 7 }
      ]);

      const ctx = createContext(metrics, { enabled: true, atfdThreshold: 5 } as RuleConfig);
      const rule = new FeatureEnvyRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 1);
      assert.ok(res[0].message.includes('Feature Envy'));
    });

    it('does not detect ATFD below threshold', () => {
      const metrics = new Map<string, any>();
      metrics.set('methods', [
        { name: 'm1', startLine: 10, atfd: 1 }
      ]);

      const ctx = createContext(metrics, { enabled: true, atfdThreshold: 5 } as RuleConfig);
      const rule = new FeatureEnvyRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 0);
    });
  });

  describe('Integration tests (fixtures)', () => {
    it('reports highAtfd.cls', () => {
      const metrics = getMetricsFromFixture('highAtfd.cls');
      const ctx = createContext(metrics, { enabled: true, atfdThreshold: 3 } as RuleConfig);

      const rule = new FeatureEnvyRule();
      const res = rule.apply(ctx);

      assert.ok(res.length >= 1);
    });

    it('does not report lowAtfd.cls', () => {
      const metrics = getMetricsFromFixture('lowAtfd.cls');
      const ctx = createContext(metrics, { enabled: true, atfdThreshold: 3 } as RuleConfig);

      const rule = new FeatureEnvyRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 0);
    });

    it('reports only the right method in mixedAtfd.cls', () => {
      const metrics = getMetricsFromFixture('mixedAtfd.cls');
      const ctx = createContext(metrics, { enabled: true, atfdThreshold: 2 } as RuleConfig);

      const rule = new FeatureEnvyRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 1);
      assert.ok(res[0].message.includes('m1'));
    });

    it('does not report noAtfd.cls', () => {
      const metrics = getMetricsFromFixture('noAtfd.cls');
      const ctx = createContext(metrics, { enabled: true, atfdThreshold: 1 } as RuleConfig);

      const rule = new FeatureEnvyRule();
      const res = rule.apply(ctx);

      assert.strictEqual(res.length, 0);
    });
  });

});
