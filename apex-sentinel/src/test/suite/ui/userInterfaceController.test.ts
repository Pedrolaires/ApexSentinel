import * as assert from 'assert';
import * as vscode from 'vscode';
import { UserInterfaceController } from '../../../ui/userInterfaceController';
import { AnalysisResult } from '../../../analysis/analysisResult';

class MockAnalyzer {
    analyze(code: string, uri: vscode.Uri, rules: any[], config: any) {
        const results: AnalysisResult[] = [{
            uri: uri,
            line: 1,
            type: 'TEST_SMELL',
            message: 'Mock violation detected'
        }];
        const metrics = new Map<string, any>();
        metrics.set('class', { name: 'MockClass', wmc: 10 });
        return { results, metrics };
    }
}

class MockSidebarProvider {
    public metricsUpdated = false;
    public filesUpdated = false;
    
    updateDebugMetrics(metrics: any) { this.metricsUpdated = true; }
    updateOpenFiles(files: any) { this.filesUpdated = true; }
    updateConfig(config: any) {}
}

class MockDiagnosticController {
    public diagnosticsUpdated = false;
    public diagnosticsCleared = false;

    updateDiagnostics(uri: vscode.Uri, results: any[]) { this.diagnosticsUpdated = true; }
    clearDiagnostics(uri: vscode.Uri) { this.diagnosticsCleared = true; }
    dispose() {}
}

const mockStatusBar = {
    text: '',
    tooltip: '',
    show: () => {},
    hide: () => {},
    dispose: () => {}
};

describe('UserInterfaceController Unit Tests', () => {
    let controller: UserInterfaceController;
    let mockContext: vscode.ExtensionContext;
    
    let mockAnalyzer: MockAnalyzer;
    let mockSidebar: MockSidebarProvider;
    let mockDiagnostics: MockDiagnosticController;

    beforeEach(() => {
        mockContext = {
            subscriptions: [],
            extensionPath: __dirname,
            workspaceState: { get: () => {}, update: () => {} },
            globalState: { get: () => {}, update: () => {} },
        } as unknown as vscode.ExtensionContext;

        controller = new UserInterfaceController(mockContext);
        mockAnalyzer = new MockAnalyzer();
        mockSidebar = new MockSidebarProvider();
        mockDiagnostics = new MockDiagnosticController();

        (controller as any).analyzer = mockAnalyzer;
        (controller as any).sidebarProvider = mockSidebar;
        (controller as any).diagnosticController = mockDiagnostics;
        (controller as any).statusBarItem = mockStatusBar;
    });

    afterEach(() => {
        controller.dispose();
    });

    it('should analyze document and trigger UI updates', () => {
        const uri = vscode.Uri.file('/mock/test.cls');
        const document = {
            uri: uri,
            getText: () => 'public class Mock {}',
            languageId: 'apex'
        } as vscode.TextDocument;

        controller.analyzeDocument(document);
        
        assert.strictEqual(mockDiagnostics.diagnosticsUpdated, true, 'Should call DiagnosticController.updateDiagnostics');
        assert.strictEqual(mockSidebar.metricsUpdated, true, 'Should call SidebarProvider.updateDebugMetrics');
        assert.strictEqual(mockSidebar.filesUpdated, true, 'Should refresh open files list');

        const scoreMap = (controller as any).fileScores as Map<string, any>;
        const fileData = scoreMap.get(uri.fsPath);
        assert.ok(fileData, 'File should be in score map');
        assert.strictEqual(fileData?.score, 90, 'Score should be 90 (100 base - 10 penalty)');
    });

    it('should clear diagnostics and score when file is closed', () => {
        const uri = vscode.Uri.file('/mock/closing.cls');
        const document = { uri: uri, fileName: 'closing.cls' } as vscode.TextDocument;

        const scoreMap = (controller as any).fileScores as Map<string, any>;
        scoreMap.set(uri.fsPath, { name: 'closing.cls', score: 50 });

        controller.handleFileClose(document);
        assert.strictEqual(mockDiagnostics.diagnosticsCleared, true, 'Should clear diagnostics on file close');
        assert.strictEqual(scoreMap.has(uri.fsPath), false, 'Should remove file from internal score map');
        assert.strictEqual(mockSidebar.filesUpdated, true, 'Should refresh sidebar list to remove the file');
    });

    it('should update status bar text based on active file score', () => {
         const uri = vscode.Uri.file('/mock/active.cls');
         const document = { uri: uri, fileName: 'active.cls' } as vscode.TextDocument;
         
         const scoreMap = (controller as any).fileScores as Map<string, any>;
         scoreMap.set(uri.fsPath, { name: 'active.cls', score: 85 });
         controller.updateStatusBarForActiveFile(document);
         assert.ok(mockStatusBar.text.includes('85'), `Status bar should display score 85. Got: ${mockStatusBar.text}`);
    });

    it('should reset status bar when no file is active', () => {
        controller.updateStatusBarForActiveFile(undefined);
        assert.ok(!mockStatusBar.text.includes('Quality:'), 'Should not show quality score when no file is active');
        assert.ok(mockStatusBar.text.includes('Apex Sentinel'), 'Should show default extension name');
    });
});