import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { LCOMCalculator } from '../../../analysis/metrics/lcomCalculator';
import { ParserAdapter } from '../../../parsing/parseAdapter';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';
import { ClassDeclarationContext, MethodDeclarationContext } from 'apex-parser/lib/ApexParser';
import { AttributeCollectorVisitor } from '../../../analysis/metrics/attributeCollectorVisitor';
import { AttributeUsageVisitor } from '../../../analysis/metrics/attributeUsageVisitor';

function getProjectRoot(): string {
    let currentDir = __dirname;
    while (!fs.existsSync(path.join(currentDir, 'package.json'))) {
        const parentDir = path.dirname(currentDir);
        if (currentDir === parentDir) {
            throw new Error('Could not find project root (package.json).');
        }
        currentDir = parentDir;
    }
    return currentDir;
}

function getFixtureContent(filename: string): string {
    const projectRoot = getProjectRoot();
    const fixturePath = path.join(projectRoot, 'src', 'test', 'suite', 'fixture', filename);
    
    if (!fs.existsSync(fixturePath)) {
        const outFixturePath = path.join(projectRoot, 'out', 'test', 'suite', 'fixture', filename);
        if (fs.existsSync(outFixturePath)) {
             return fs.readFileSync(outFixturePath, 'utf-8');
        }
        throw new Error(`Fixture file not found at: ${fixturePath}`);
    }
    return fs.readFileSync(fixturePath, 'utf-8');
}

class MethodUsageExtractor extends AbstractParseTreeVisitor<void> implements ApexParserVisitor<void> {
    public methodUsage: Map<string, Set<string>> = new Map();
    private classAttributes: Set<string> = new Set();

    constructor(classAttributes: Set<string>) {
        super();
        this.classAttributes = classAttributes;
    }

    protected defaultResult(): void { return; }

    visitMethodDeclaration(ctx: MethodDeclarationContext) {
        const methodName = ctx.id().Identifier()?.symbol.text || 'unknown';
        const body = ctx.block();

        if (body) {
            const usageVisitor = new AttributeUsageVisitor(this.classAttributes);
            usageVisitor.visit(body);
            this.methodUsage.set(methodName, usageVisitor.usedAttributes);
        } else {
            this.methodUsage.set(methodName, new Set());
        }
    }
}

function getUsageMapFromFixture(filename: string): Map<string, Set<string>> {
    const code = getFixtureContent(filename);
    const parser = new ParserAdapter();
    const result = parser.parse(code);

    if (!result) {
         throw new Error(`Failed to parse ${filename}`);
    }

    const collector = new AttributeCollectorVisitor();
    collector.visit(result.tree);
    const attributes = collector.classAttributes;

    const extractor = new MethodUsageExtractor(attributes);
    extractor.visit(result.tree);
    
    return extractor.methodUsage;
}

describe('LCOM Calculator Tests', () => {

    describe('Unit Tests (Manual Map Construction)', () => {
        it('should return 0 if less than 2 methods', () => {
            const usage = new Map<string, Set<string>>();
            usage.set('m1', new Set(['a']));
            
            const lcom = LCOMCalculator.calculate(usage);
            assert.strictEqual(lcom, 0);
        });

        it('should return 0 when methods match perfectly (Cohesive)', () => {
            const usage = new Map<string, Set<string>>();
            usage.set('m1', new Set(['a']));
            usage.set('m2', new Set(['a']));

            const lcom = LCOMCalculator.calculate(usage);
            assert.strictEqual(lcom, 0, 'High cohesion should result in LCOM 0');
        });

        it('should return 1 when 2 methods share nothing (Non-Cohesive)', () => {
            const usage = new Map<string, Set<string>>();
            usage.set('m1', new Set(['a']));
            usage.set('m2', new Set(['b']));

            const lcom = LCOMCalculator.calculate(usage);
            assert.strictEqual(lcom, 1);
        });

        it('should calculate correctly for 3 methods mixed', () => {
            const usage = new Map<string, Set<string>>();
            usage.set('m1', new Set(['a']));
            usage.set('m2', new Set(['a']));
            usage.set('m3', new Set(['b']));

            const lcom = LCOMCalculator.calculate(usage);
            assert.strictEqual(lcom, 1);
        });
    });

    describe('Integration Tests (Using Fixtures)', () => {
        
        it('should calculate high LCOM for "godClass_wmc_lcom.cls"', () => {
            const usageMap = getUsageMapFromFixture('godClass_wmc_lcom.cls');
            const lcom = LCOMCalculator.calculate(usageMap);
            assert.strictEqual(lcom, 10, 'Expected maximal LCOM for fully disjoint methods');
        });

        it('should calculate LCOM for "godClass_ok.cls"', () => {
            const usageMap = getUsageMapFromFixture('godClass_ok.cls');
            const lcom = LCOMCalculator.calculate(usageMap);

            assert.strictEqual(lcom, 1, 'Should have LCOM 1 due to method "two" not using field "a"');
        });

        it('should calculate LCOM 0 for cohesive class (fieldInitializer.cls)', () => {
            const usageMap = getUsageMapFromFixture('fieldInitializer.cls');
            const lcom = LCOMCalculator.calculate(usageMap);

            assert.strictEqual(lcom, 0, 'Classes with less than 2 methods should have LCOM 0');
        });
    });
});