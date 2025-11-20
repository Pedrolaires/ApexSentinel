import * as assert from 'assert';
import { LongMethodRule } from '../../../analysis/rules/longMethodRule';
import { createContext } from '../helpers/contextFactory';
import { getMetricsFromFixture } from '../helpers/parser';
import { RuleConfig } from '../../../analysis/config/configurationManager';

describe('LongMethodRule — Unit and Integration tests', () => {

  describe('Unit tests (manual metrics)', () => {
    it('detects method with LOC > threshold', () => {
      const metrics = new Map<string, any>();
      metrics.set('methods', [
        { name: 'big', startLine: 10, lines: 50, nop: 0, cc: 1 }
      ]);
      const ctx = createContext(metrics, { enabled: true, threshold: 20 } as RuleConfig, null);
      const rule = new LongMethodRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 1);
      assert.ok(res[0].message.includes('possui 50 linhas'));
    });

    it('detects method with NOP > threshold', () => {
      const metrics = new Map<string, any>();
      metrics.set('methods', [
        { name: 'tooMany', startLine: 5, lines: 10, nop: 6, cc: 1 }
      ]);
      const ctx = createContext(metrics, { enabled: true, nopThreshold: 5 } as RuleConfig, null);
      const rule = new LongMethodRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 1);
      assert.ok(res[0].message.includes('possui 6 parâmetros'));
    });

    it('detects method with CC > threshold', () => {
      const metrics = new Map<string, any>();
      metrics.set('methods', [
        { name: 'complex', startLine: 2, lines: 5, nop: 0, cc: 12 }
      ]);
      const ctx = createContext(metrics, { enabled: true, ccThreshold: 10 } as RuleConfig, null);
      const rule = new LongMethodRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 1);
      assert.ok(res[0].message.includes('Complexidade Ciclomática de 12'));
    });

    it('does not report when within thresholds', () => {
      const metrics = new Map<string, any>();
      metrics.set('methods', [
        { name: 'ok', startLine: 1, lines: 5, nop: 1, cc: 1 }
      ]);
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, null);
      const rule = new LongMethodRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 0);
    });
  });

  describe('Integration tests (AST from fixtures → MetricVisitor → Rule)', () => {
    it('reports for fixture tooLong.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('tooLong.cls');
      const ctx = createContext(metrics, { enabled: true, threshold: 20 } as RuleConfig, ast);
      const rule = new LongMethodRule();
      const res = rule.apply(ctx);
      assert.ok(res.length >= 1, 'esperado pelo menos 1 aviso para tooLong.cls');
      assert.ok(res.some(r => r.type === 'LONG_METHOD'));
    });

    it('reports for manyParams.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('manyParams.cls');
      const ctx = createContext(metrics, { enabled: true, nopThreshold: 5 } as RuleConfig, ast);
      const rule = new LongMethodRule();
      const res = rule.apply(ctx);
      assert.ok(res.length >= 1, 'esperado pelo menos 1 aviso para manyParams.cls');
      assert.ok(res.some(r => r.message.includes('parâmetros')));
    });

    it('reports for complexMethod.cls (cc)', () => {
      const { metrics, ast } = getMetricsFromFixture('complexMethod.cls');
      const ctx = createContext(metrics, { enabled: true, ccThreshold: 5 } as RuleConfig, ast);
      const rule = new LongMethodRule();
      const res = rule.apply(ctx);
      assert.ok(res.length >= 1, 'esperado aviso por complexidade');
      assert.ok(res.some(r => r.message.includes('Complexidade Ciclomática')));
    });

    it('no report for ok.cls', () => {
      const { metrics, ast } = getMetricsFromFixture('ok.cls');
      const ctx = createContext(metrics, { enabled: true } as RuleConfig, ast);
      const rule = new LongMethodRule();
      const res = rule.apply(ctx);
      assert.strictEqual(res.length, 0, 'sem avisos esperados para ok.cls');
    });
  });

});