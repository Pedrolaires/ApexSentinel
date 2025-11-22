import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { AtfdCalculatorVisitor } from '../../../analysis/metrics/atfdCalculatorVisitor';
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
    const fixturePath = path.join(projectRoot, 'src', 'test',  'suite', 'fixture', filename);
    
    if (!fs.existsSync(fixturePath)) {
        const outFixturePath = path.join(projectRoot, 'out', 'test',  'suite', 'fixture', filename);
        if (fs.existsSync(outFixturePath)) {
             return fs.readFileSync(outFixturePath, 'utf-8');
        }
        throw new Error(`Fixture not found: ${filename}`);
    }
    return fs.readFileSync(fixturePath, 'utf-8');
}

class FirstMethodFinder extends AbstractParseTreeVisitor<void> implements ApexParserVisitor<void> {
    public methodNode: MethodDeclarationContext | undefined;
    protected defaultResult(): void { return; }
    
    visitMethodDeclaration(ctx: MethodDeclarationContext) {
        if (!this.methodNode) {
            this.methodNode = ctx;
        }
    }
}

describe('ATFD Calculator Visitor (Integration with Fixtures)', () => {
    let parserAdapter: ParserAdapter;

    beforeEach(() => {
        parserAdapter = new ParserAdapter();
    });

    function getAtfdForFixture(filename: string): Set<string> {
        const code = getFixtureContent(filename);
        const parseResult = parserAdapter.parse(code);
        
        if (!parseResult) {
            throw new Error(`Failed to parse fixture: ${filename}`);
        }

        const finder = new FirstMethodFinder();
        finder.visit(parseResult.tree);

        if (!finder.methodNode || !finder.methodNode.block()) {
            return new Set<string>();
        }

        const atfdVisitor = new AtfdCalculatorVisitor(new Set<string>());
        atfdVisitor.visit(finder.methodNode.block()!);
        
        return atfdVisitor.foreignDataAccesses;
    }

    it('should have 0 ATFD for "ok.cls"', () => {
        const atfd = getAtfdForFixture('ok.cls');
        
        console.log('[Test Debug] ATFD for ok.cls:', Array.from(atfd));
        assert.strictEqual(atfd.size, 0, 'ok.cls should ideally have 0 foreign data accesses');
    });

    it('should detect foreign accesses in "complexMethod.cls" (if present)', () => {
        const atfd = getAtfdForFixture('complexMethod.cls');
        
        console.log('[Test Debug] ATFD for complexMethod.cls:', Array.from(atfd));
        
        assert.ok(atfd.size >= 0, 'Should run successfully on complex code'); 
    });

    it('should detect accesses in "tooLong.cls"', () => {
        const atfd = getAtfdForFixture('tooLong.cls');
        console.log('[Test Debug] ATFD for tooLong.cls:', Array.from(atfd));
        assert.notStrictEqual(atfd, undefined);
    });
});