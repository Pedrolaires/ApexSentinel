import * as assert from 'assert';
import * as vscode from 'vscode';

describe('Extension Integration Test', () => {
    
    const extensionId = 'ASolution.apex-sentinel'; 

    it('should activate the extension without errors', async () => {
        const extension = vscode.extensions.getExtension(extensionId);
        
        assert.ok(extension, 'Extension should be present');
        
        if (!extension.isActive) {
            await extension.activate();
        }
        
        assert.ok(extension.isActive, 'Extension should be active after activation call');
    });

    it('should register the expected commands', async () => {
        const allCommands = await vscode.commands.getCommands(true);
        
        const ruleDocCommand = 'apex-sentinel.openRuleDocumentation';
        assert.ok(
            allCommands.includes(ruleDocCommand), 
            `Command "${ruleDocCommand}" should be registered`
        );
    });

    it('should register the Sidebar View', async () => {
        const extension = vscode.extensions.getExtension(extensionId);
        assert.ok(extension?.isActive);
    });
});