import * as assert from 'assert';
import * as sinon from 'sinon';
import * as vscode from 'vscode';
import { ConfigurationManager, IFileSystem } from '../../../analysis/config/configurationManager';

describe('ConfigurationManager Test Suite', () => {
    let configManager: ConfigurationManager
    ;
    let sandbox: sinon.SinonSandbox;
    
    let getConfigurationStub: sinon.SinonStub;
    let showErrorMessageStub: sinon.SinonStub;
    let createFileSystemWatcherStub: sinon.SinonStub;

    let mockFs: IFileSystem;
    let readFileSyncStub: sinon.SinonStub;
    let existsSyncStub: sinon.SinonStub;

    let mockConfig: any;
    let mockWatcher: any;
    let capturedChangeCallback: Function | undefined;

    beforeEach(() => {
        sandbox = sinon.createSandbox();

        readFileSyncStub = sandbox.stub();
        existsSyncStub = sandbox.stub();
        
        mockFs = {
            readFileSync: readFileSyncStub,
            existsSync: existsSyncStub
        };

        mockConfig = {
            get: sandbox.stub()
        };
        getConfigurationStub = sandbox.stub(vscode.workspace, 'getConfiguration').returns(mockConfig as any);

        showErrorMessageStub = sandbox.stub(vscode.window, 'showErrorMessage');

        mockWatcher = {
            onDidChange: sandbox.stub().callsFake((cb: Function) => {
                capturedChangeCallback = cb;
                return { dispose: sandbox.stub() };
            }),
            onDidCreate: sandbox.stub().callsFake((cb: Function) => {
                capturedChangeCallback = cb;
                return { dispose: sandbox.stub() };
            }),
            onDidDelete: sandbox.stub(),
            dispose: sandbox.stub()
        };
        createFileSystemWatcherStub = sandbox.stub(vscode.workspace, 'createFileSystemWatcher').returns(mockWatcher);

        const mockFolder = { uri: { fsPath: '/mock/root' }, name: 'MockProject', index: 0 };
        sandbox.stub(vscode.workspace, 'workspaceFolders').value([mockFolder]);
    });

    afterEach(() => {
        if (configManager) {
            configManager.dispose();
        }
        sandbox.restore();
    });

    it('should load default values when no overrides exist', () => {
        existsSyncStub.returns(false);
        
        mockConfig.get.callsFake((key: string, defaultValue: any) => defaultValue);

        configManager = new ConfigurationManager(mockFs);
        const config = configManager.getFullConfig();

        assert.strictEqual(config.rules.longMethod.threshold, 20, 'Threshhold default do longMethod não está definido corretamente');
        assert.strictEqual(config.rules.godClass.wmcThreshold, 47, 'Threshhold default da godclass não está definido corretamente');
    });

    it('should prioritize.apexsentinelrc.json over VS Code settings', () => {
        mockConfig.get.withArgs('rules.longMethod.threshold', 20).returns(30);
        mockConfig.get.callsFake((key: string, defaultValue: any) => defaultValue);

        // Arquivo existe e retorna 40
        existsSyncStub.returns(true);
        const projectConfig = {
            rules: {
                longMethod: {
                    threshold: 40
                }
            }
        };
        readFileSyncStub.returns(JSON.stringify(projectConfig));

        configManager = new ConfigurationManager(mockFs);
        const config = configManager.getFullConfig();

        assert.strictEqual(config.rules.longMethod.threshold, 40);
    });

    it('should handle malformed JSON gracefully', () => {
        existsSyncStub.returns(true);
        readFileSyncStub.returns('{ "rules": { INVALID JSON... ');
        mockConfig.get.callsFake((key: string, defaultValue: any) => defaultValue);
        configManager = new ConfigurationManager(mockFs);
        assert.strictEqual(showErrorMessageStub.called, true, 'Mensagem de erro não foi exibida');
        const config = configManager.getFullConfig();
        assert.strictEqual(config.rules.longMethod.threshold, 20, 'Deveria usar o valor padrão após erro');
    });
});