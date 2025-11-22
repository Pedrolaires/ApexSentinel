import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { ParserAdapter } from '../../../parsing/parseAdapter';
import { AttributeCollectorVisitor } from '../../../analysis/metrics/attributeCollectorVisitor';


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


describe('AttributeCollectorVisitor (Integration with Fixtures)', () => {
    let parserAdapter: ParserAdapter;

    beforeEach(() => {
        parserAdapter = new ParserAdapter();
    });

    function getAttributesFromFixture(filename: string): Set<string> {
        const code = getFixtureContent(filename);
        const parseResult = parserAdapter.parse(code);
        
        if (!parseResult) {
            throw new Error(`Failed to parse fixture: ${filename}`);
        }

        const visitor = new AttributeCollectorVisitor();
        visitor.visit(parseResult.tree);
        
        return visitor.classAttributes;
    }

    it('should collect all 12 attributes from "godClass_manyAttributes.cls"', () => {
        const attributes = getAttributesFromFixture('godClass_manyAttributes.cls');
        
        console.log('[dbg]Attributes found in godClass_manyAttributes:', Array.from(attributes));

        assert.strictEqual(attributes.size, 12, 'Should detect exactly 12 attributes');
        assert.ok(attributes.has('a1'), 'Should contain attribute "a1"');
        assert.ok(attributes.has('a12'), 'Should contain attribute "a12"');
    });

    it('should correctly identify initialized fields in "fieldInitializer.cls"', () => {
        const attributes = getAttributesFromFixture('fieldInitializer.cls');
        
        assert.strictEqual(attributes.size, 1, 'Should detect 1 attribute');
        assert.ok(attributes.has('x'), 'Should detect attribute "x" even with initialization assignment');
    });

    it('should collect 5 attributes from "godClass_wmc_lcom.cls"', () => {
        const attributes = getAttributesFromFixture('godClass_wmc_lcom.cls');
        
        assert.strictEqual(attributes.size, 5, 'Should detect 5 attributes (a, b, c, d, e)');
        ['a', 'b', 'c', 'd', 'e'].forEach(attr => {
            assert.ok(attributes.has(attr), `Missing attribute: ${attr}`);
        });
    });

    it('should return empty set for "manyParams.cls"', () => {
        const attributes = getAttributesFromFixture('manyParams.cls');
        
        assert.strictEqual(attributes.size, 0, 'Method parameters should NOT be counted as class attributes');
    });

    it('should return empty set for "emptyCatch.cls"', () => {
        const attributes = getAttributesFromFixture('emptyCatch.cls');
        
        assert.strictEqual(attributes.size, 0, 'Local variables inside methods should NOT be counted');
    });

    it('should detect object type attributes in "lowAtfd.cls"', () => {
        const attributes = getAttributesFromFixture('lowAtfd.cls');
        
        assert.strictEqual(attributes.size, 1);
        assert.ok(attributes.has('acc'), 'Should detect object reference "acc"');
    });
});