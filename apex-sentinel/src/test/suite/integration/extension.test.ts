import * as assert from 'assert';
import * as vscode from 'vscode';

// Ajuste para o ID correto (publisher.name)
const EXTENSION_ID = 'Asolution.apex-sentinel'; 

describe('5.1 & 5.2 — Integration Tests (Activation & Diagnostics)', () => {

    // Helper para esperar a análise assíncrona (debounce)
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    before(async () => {
        // Garante que a extensão está ativa antes de começar
        const extension = vscode.extensions.getExtension(EXTENSION_ID);
        if (!extension?.isActive) {
            await extension?.activate();
        }
    });

    // --- 5.1 EXTENSION ACTIVATION ---
    
    it('Should activate extension and register commands', async () => {
        const extension = vscode.extensions.getExtension(EXTENSION_ID);
        assert.ok(extension, 'Extension should be found');
        assert.ok(extension.isActive, 'Extension should be active');

        const allCommands = await vscode.commands.getCommands(true);
        assert.ok(
            allCommands.includes('apex-sentinel.openRuleDocumentation'), 
            'Command "openRuleDocumentation" should be registered'
        );
    });

    // --- 5.2 DIAGNOSTICS & CODE ACTIONS ---

    it('Should Create -> Detect Smell -> Fix Smell -> Clear Diagnostics', async function() {
        this.timeout(10000); // Aumenta timeout para operações de arquivo

        // 1. Criar um documento Apex temporário
        const doc = await vscode.workspace.openTextDocument({
            language: 'apex',
            content: 'public class Temp {}' // Começa limpo
        });
        await vscode.window.showTextDocument(doc);
        
        // Espera inicialização
        await sleep(1000);

        // 2. Inserir código "Smelly" (Método com muitos parâmetros para ativar LongMethod ou regra similar)
        const editor = vscode.window.activeTextEditor;
        if (!editor) { throw new Error('No active editor'); }

        await editor.edit(editBuilder => {
            // Inserimos um método com 20 parâmetros (assumindo que viola a regra de NOP ou Long Method)
            const badCode = `
                public class Temp {
                    public void messyMethod(
                        Integer a, Integer b, Integer c, Integer d, Integer e,
                        Integer f, Integer g, Integer h, Integer i, Integer j,
                        Integer k, Integer l, Integer m, Integer n, Integer o
                    ) {
                        System.debug('Bad code');
                    }
                }
            `;
            editBuilder.replace(new vscode.Range(0, 0, doc.lineCount, 0), badCode);
        });

        // 3. Esperar a análise rodar (UserInterfaceController tem debounce/eventos)
        await sleep(2000); 

        // 4. Verificar se Diagnósticos apareceram
        const diagnosticsBad = vscode.languages.getDiagnostics(doc.uri);
        assert.ok(diagnosticsBad.length > 0, 'Should have diagnostics for smelly code');
        
        // Verifica se é o erro esperado (ex: LONG_METHOD ou similar)
        // Ajuste "LONG_METHOD" conforme a string exata que sua regra retorna em diagnostic.code
        const hasRelevantError = diagnosticsBad.some(d => 
            d.code === 'LONG_METHOD' || d.message.includes('parâmetros')
        );
        assert.ok(hasRelevantError, `Expected LONG_METHOD error, found: ${diagnosticsBad.map(d => d.code)}`);

        // 5. Testar Code Action (Link)
        // Pegamos as ações disponíveis na linha do erro
        const range = diagnosticsBad[0].range;
        const codeActions = await vscode.commands.executeCommand<vscode.CodeAction[]>(
            'vscode.executeCodeActionProvider',
            doc.uri,
            range
        );

        assert.ok(codeActions && codeActions.length > 0, 'Should provide code actions');
        const learnMoreAction = codeActions.find(ca => ca.title.includes('Aprender mais'));
        assert.ok(learnMoreAction, 'Should have "Aprender mais" action');
        
        // Verificar se o comando do link está correto
        assert.strictEqual(learnMoreAction.command?.command, 'apex-sentinel.openRuleDocumentation');
        assert.ok(learnMoreAction.command?.arguments?.[0], 'Should have URL argument');

        // 6. Corrigir o código (Deletar o smell)
        await editor.edit(editBuilder => {
            const cleanCode = `
                public class Temp {
                    public void cleanMethod() {
                        System.debug('Clean');
                    }
                }
            `;
            editBuilder.replace(new vscode.Range(0, 0, doc.lineCount, 0), cleanCode);
        });

        // 7. Esperar re-análise
        await sleep(2000);

        // 8. Verificar se Diagnósticos sumiram
        const diagnosticsClean = vscode.languages.getDiagnostics(doc.uri);
        assert.strictEqual(diagnosticsClean.length, 0, 'Diagnostics should be cleared after fix');
    });
});