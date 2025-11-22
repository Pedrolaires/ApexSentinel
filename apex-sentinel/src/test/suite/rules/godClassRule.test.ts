import * as assert from 'assert';
import { createContext } from '../helpers/contextFactory';
import { getMetricsFromFixture } from '../helpers/parser';
import { GodClassRule } from '../../../analysis/rules/godClassRule';
import { RuleConfig } from '../../../analysis/config/configurationManager';

describe('GodClassRule — Unit and Integration tests', () => {

  describe('Unit tests (manual metrics)', () => {
    it('detects using WMC + LCOM criteria', () => {
      const metrics = new Map<string, any>();
      metrics.set('class', {
        name: 'Fake',
        startLine: 1,
        endLine: 200,
        nom: 5,
        noa: 5,
        wmc: 100,
        lcom: 50
      });
      const ctx = createContext(metrics, { enabled: true, wmcThreshold: 47, lcomThreshold: 10 } as RuleConfig, null);
      const rule = new GodClassRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 1);
      assert.ok(res[0].message.includes('WMC'));
    });

    it('detects using NOM threshold', () => {
      const metrics = new Map<string, any>();
      metrics.set('class', {
        name: 'Fake',
        startLine: 1,
        endLine: 200,
        nom: 20,
        noa: 2,
        wmc: 10,
        lcom: 0
      });
      const ctx = createContext(metrics, { enabled: true, nomThreshold: 15 } as RuleConfig, null);
      const rule = new GodClassRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 1);
      assert.ok(res[0].message.includes('métodos'));
    });

    it('detects using NOA threshold', () => {
      const metrics = new Map<string, any>();
      metrics.set('class', {
        name: 'Fake',
        startLine: 1,
        endLine: 200,
        nom: 5,
        noa: 15,
        wmc: 10,
        lcom: 0
      });
      const ctx = createContext(metrics, { enabled: true, noaThreshold: 10 } as RuleConfig, null);
      const rule = new GodClassRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 1);
      assert.ok(res[0].message.includes('atributos'));
    });

    it('does not report when within thresholds', () => {
      const metrics = new Map<string, any>();
      metrics.set('class', {
        name: 'Fake',
        startLine: 1,
        endLine: 50,
        nom: 3,
        noa: 2,
        wmc: 5,
        lcom: 0
      });
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, null);
      const rule = new GodClassRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 0);
    });
  });

  describe('Integration tests (fixtures)', () => {
    it('reports godClass_wmc_lcom.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('godClass_wmc_lcom.cls');
      const ctx = createContext(metrics, { enabled: true, wmcThreshold: 10, lcomThreshold: 1 } as RuleConfig, null);
      const rule = new GodClassRule();
      const res = rule.apply(ctx);
      assert.ok(res.length >= 1);
      assert.ok(res.some(r => r.type === 'GOD_CLASS'));
    });

    it('reports godClass_manyMethods.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('godClass_manyMethods.cls');
      const ctx = createContext(metrics, { enabled: true, nomThreshold: 15 } as RuleConfig, ast);
      const rule = new GodClassRule();
      const res = rule.apply(ctx);
      assert.ok(res.length >= 1);
      assert.ok(res[0].message.includes('métodos'));
    });

    it('reports godClass_manyAttributes.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('godClass_manyAttributes.cls');
      const ctx = createContext(metrics, { enabled: true, noaThreshold: 10 } as RuleConfig, ast);
      const rule = new GodClassRule();
      const res = rule.apply(ctx);
      assert.ok(res.length >= 1);
      assert.ok(res.some(r => r.message.includes('atributos')));
    });

    it('does not report for godClass_ok.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('godClass_ok.cls');
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, ast);
      const rule = new GodClassRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 0);
    });
  });

});
