import * as vscode from 'vscode';
import { UserInterfaceController } from './ui/userInterfaceController';

export async function activate(context: vscode.ExtensionContext) {
  console.log('[ApexSentinel] activate start');
  vscode.window.showInformationMessage('🔍 Apex Sentinel carregando...');

  const uiController = new UserInterfaceController();

  const analyzeCommand = vscode.commands.registerCommand('apex-sentinel.analyzeFile', async () => {
    try {
      console.log('[ApexSentinel] command: analyzeFile triggered');
      vscode.window.showInformationMessage('Executando análise...');
      const res = await uiController.analyzeActiveFile();
      console.log('[ApexSentinel] analyzeActiveFile returned:', res);
    } catch (err) {
      console.error('[ApexSentinel] analyzeFile error:', err);
      vscode.window.showErrorMessage('Erro na análise: ' + (err && err.message));
    }
  });

  // Comando manual para debugar facilmente
  const analyzeNow = vscode.commands.registerCommand('apex-sentinel.analyzeNow', async () => {
    try {
      console.log('[ApexSentinel] command: analyzeNow triggered');
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage('Abra um arquivo Apex antes de executar.');
        return;
      }
      const code = editor.document.getText();
      const res = await uiController.analyzeText(code, editor.document.uri);
      console.log('[ApexSentinel] analyzeNow results:', res);
      vscode.window.showInformationMessage(`Apex Sentinel: ${res.length} item(s) retornado(s).`);
    } catch (err) {
      console.error('[ApexSentinel] analyzeNow error:', err);
      vscode.window.showErrorMessage('Erro: ' + (err && err.message));
    }
  });

  const onTypeListener = vscode.workspace.onDidChangeTextDocument(async (event) => {
    try {
      if (event.document.languageId === 'apex') {
        console.log('[ApexSentinel] Evento onDidChangeTextDocument disparado para', event.document.fileName);
        await uiController.onTyping(event.document);
      }
    } catch (err) {
      console.error('[ApexSentinel] onTypeListener error:', err);
    }
  });

  context.subscriptions.push(analyzeCommand, analyzeNow, onTypeListener);

  console.log('[ApexSentinel] activate end');
  vscode.window.showInformationMessage('✅ Apex Sentinel ativado com sucesso.');
}

export function deactivate() {
  console.log('[ApexSentinel] deactivate');
}
