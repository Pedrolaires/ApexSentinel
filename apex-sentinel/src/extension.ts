import * as vscode from 'vscode';
import { UserInterfaceController } from './ui/userInterfaceController';
import { CodeActionProvider } from './ui/codeActionProvider';

export function activate(context: vscode.ExtensionContext) {
  console.log('[Extension] A extensão "Apex Sentinel" está sendo ativada.');
  vscode.window.showInformationMessage('🔍 Apex Sentinel carregando...');

  const uiController = new UserInterfaceController();

  const analyzeCommand = vscode.commands.registerCommand('apex-sentinel.analyzeFile', async () => {
    try {
      vscode.window.showInformationMessage('Executando análise...');
      await uiController.analyzeActiveFile();
      vscode.window.showInformationMessage('Análise concluída!');
    } catch (err: any) {
      console.error('[Extension] Erro ao executar analyzeFile:', err);
      vscode.window.showErrorMessage('Ocorreu um erro durante a análise: ' + err.message);
    }
  });

  const openDocCommand = vscode.commands.registerCommand('apex-sentinel.openRuleDocumentation', (url: string) => {
    vscode.env.openExternal(vscode.Uri.parse(url));
  });

  const onTypeListener = vscode.workspace.onDidChangeTextDocument(async (event) => {
    if (event.document.languageId === 'apex') {
      await uiController.analyzeDocument(event.document);
    }
  });
  
  const onOpenListener = vscode.workspace.onDidOpenTextDocument(async (document) => {
    if (document.languageId === 'apex') {
      await uiController.analyzeDocument(document);
    }
  });

  console.log('[Extension] Preparando para registrar o CodeActionProvider...');
  
  const codeActionProvider = vscode.languages.registerCodeActionsProvider(
    { language: 'apex', scheme: 'file' },
    new CodeActionProvider(),
    {
      providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
    }
  );

  console.log('[Extension] CodeActionProvider registrado.');

  context.subscriptions.push(
    analyzeCommand,
    openDocCommand,
    onTypeListener,
    onOpenListener,
    codeActionProvider
  );

  console.log('[Extension] Extensão ativada com sucesso.');
  vscode.window.showInformationMessage('✅ Apex Sentinel está ativo.');
}

export function deactivate() {
  console.log('[Extension] A extensão "Apex Sentinel" foi desativada.');
}