import * as assert from 'assert';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

import { ConfigurationManager, IFileSystem } from '../../../analysis/config/configurationManager';
import { ICodeSmellRule } from '../../../analysis/rules/ICodeSmellRule';
import { CodeSmellAnalyzer } from '../../../analysis/codeSmellAnalyzer';

function getProjectRoot(): string {
    let currentDir = __dirname;
    while (!fs.existsSync(path.join(currentDir, 'package.json'))) {
        const parentDir = path.dirname(currentDir);
        if (currentDir === parentDir) {
            throw new Error('Could not find project root (package.json not found in parent directories).');
        }
        currentDir = parentDir;
    }
    return currentDir;
}

function getFixtureContent(filename: string): string {
    const projectRoot = getProjectRoot();
    
    const fixturePath = path.join(projectRoot, 'src', 'test', 'suite','fixture', filename);

    console.log(`[Test] Looking for fixture at: ${fixturePath}`);

    if (!fs.existsSync(fixturePath)) {
        const outFixturePath = path.join(projectRoot, 'out', 'test', 'suite','fixture', filename);
        if (fs.existsSync(outFixturePath)) {
             return fs.readFileSync(outFixturePath, 'utf-8');
        }

        throw new Error(`Fixture file not found. Tried:\n 1. ${fixturePath}\n 2. ${outFixturePath}`);
    }

    return fs.readFileSync(fixturePath, 'utf-8');
}
class MockConfigFileSystem implements IFileSystem {
    readFileSync(path: string, encoding: string): string {
        return JSON.stringify({ 
            rules: { 
                FixtureTestRule: { enabled: true } 
            } 
        });
    }
    existsSync(path: string): boolean {
        return true;
    }
}

class FixtureTestRule implements ICodeSmellRule {
    public name = 'FixtureTestRule';

    apply(context: any): any[] {
        const results: any[] = [];
        const methods = context.metrics.get('methods');

        if (methods) {
            methods.forEach((method: any) => {
                if (method.lines > 5) {
                    results.push({
                        uri: context.uri,
                        line: method.startLine,
                        type: 'TEST_SMELL',
                        message: `Method ${method.name} is too long via fixture`
                    });
                }
            });
        }
        return results;
    }
}

describe('CodeSmellAnalyzer Integration with Fixtures', () => {
    let analyzer: CodeSmellAnalyzer;
    let configManager: ConfigurationManager;
    let activeRules: ICodeSmellRule[];

    beforeEach(() => {
        const mockFs = new MockConfigFileSystem();
        configManager = new ConfigurationManager(mockFs);
        analyzer = new CodeSmellAnalyzer();
        activeRules = [new FixtureTestRule()];
    });

    afterEach(() => {
        configManager.dispose();
    });

    it('should analyze "ok.cls" fixture and return zero violations', () => {
        const filename = 'ok.cls';
        const code = getFixtureContent(filename);
        const uri = vscode.Uri.file(path.join(getProjectRoot(), 'src', 'test', 'suite','fixture', filename));

        const result = analyzer.analyze(code, uri, activeRules, configManager);

        assert.ok(result.metrics, 'Metrics should be calculated');
        assert.strictEqual(result.results.length, 0, `Expected 0 violations in ${filename}, found ${result.results.length}`);
    });

    it('should correctly populate metrics map from "complexMethod.cls"', () => {
        const filename = 'complexMethod.cls';
        const code = getFixtureContent(filename);
        const uri = vscode.Uri.file(path.join(getProjectRoot(), 'src', 'test', 'suite','fixture', filename));

        const result = analyzer.analyze(code, uri, [], configManager);

        assert.ok(result.metrics, 'Metrics object should be present');
        const methods = result.metrics?.get('methods');
        
        assert.ok(methods && methods.length > 0, 'Should detect methods in complexMethod.cls');
        
        const firstMethod = methods[0];
        assert.strictEqual(typeof firstMethod.cc, 'number', 'Cyclomatic Complexity (cc) should be a number');
        assert.ok(firstMethod.cc > 0, 'CC should be greater than 0');
    });
});