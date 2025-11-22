import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { CyclomaticComplexityCalculator } from '../../../analysis/metrics/cyclomaticComplexityCalculator';
import { ParserAdapter } from '../../../parsing/parseAdapter';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';
import { MethodDeclarationContext } from 'apex-parser/lib/ApexParser';

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

class NamedMethodFinder extends AbstractParseTreeVisitor<void> implements ApexParserVisitor<void> {
    public methodNode: MethodDeclarationContext | undefined;

    constructor(private methodName: string) {
        super();
    }

    protected defaultResult(): void { return; }
    
    visitMethodDeclaration(ctx: MethodDeclarationContext) {
        const currentMethodName = ctx.id().Identifier()?.symbol.text;
        if (currentMethodName === this.methodName) {
            this.methodNode = ctx;
        }
    }
}


describe('Cyclomatic Complexity Calculator (Integration with Fixtures)', () => {
    let parserAdapter: ParserAdapter;

    beforeEach(() => {
        parserAdapter = new ParserAdapter();
    });

    function getCCForMethod(fixtureName: string, methodName: string): number {
        const code = getFixtureContent(fixtureName);
        const parseResult = parserAdapter.parse(code);
        
        if (!parseResult) {
            throw new Error(`Failed to parse ${fixtureName}`);
        }

        const finder = new NamedMethodFinder(methodName);
        finder.visit(parseResult.tree);

        if (!finder.methodNode) {
            throw new Error(`Method "${methodName}" not found in ${fixtureName}`);
        }
        return CyclomaticComplexityCalculator.calculate(finder.methodNode.block());
    }

    it('should calculate CC = 1 for simple methods (godClass_ok.cls)', () => {
        const cc = getCCForMethod('godClass_ok.cls', 'one');
        assert.strictEqual(cc, 1, 'Simple method should have CC of 1');
    });

    it('should calculate CC = 6 for method "m1" in "godClass_wmc_lcom.cls"', () => {
        const cc = getCCForMethod('godClass_wmc_lcom.cls', 'm1');
        assert.strictEqual(cc, 6);
    });

    it('should calculate CC = 5 for method "m3" in "godClass_wmc_lcom.cls"', () => {
        const cc = getCCForMethod('godClass_wmc_lcom.cls', 'm3');
        assert.strictEqual(cc, 5);
    });

    it('should calculate CC = 2 for method with try/catch (emptyCatch.cls)', () => {
        const cc = getCCForMethod('emptyCatch.cls', 'run');
        assert.strictEqual(cc, 2);
    });

    it('should handle null/undefined nodes gracefully', () => {
        const cc = CyclomaticComplexityCalculator.calculate(undefined);
        assert.strictEqual(cc, 1, 'Should return base complexity 1 for empty/undefined nodes');
    });
});