import * as vscode from 'vscode';
import { UserInterfaceController } from './ui/userInterfaceController';
import { CodeActionProvider } from './ui/codeActionProvider';

let uiController: UserInterfaceController;

export function activate(context: vscode.ExtensionContext) {
  uiController = new UserInterfaceController(context);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      'apex-sentinel-sidebar',
      uiController.sidebarProvider
    )
  );

  const openDocCommand = vscode.commands.registerCommand('apex-sentinel.openRuleDocumentation', (url: string) => {
    if (url) {
      vscode.env.openExternal(vscode.Uri.parse(url));
    } else {
      vscode.window.showErrorMessage('URL de documentação inválida.');
    }
  });
  context.subscriptions.push(openDocCommand);

  const codeActionProvider = vscode.languages.registerCodeActionsProvider(
        [
            { language: 'apex', scheme: 'file' },
            { language: 'apex', scheme: 'untitled' } 
        ],
        new CodeActionProvider(),
        {
            providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
        }
    );
  context.subscriptions.push(codeActionProvider);

  vscode.workspace.textDocuments.forEach(doc => {
    if (doc.languageId === 'apex') { uiController.handleFileOpen(doc); }
  });

  vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId === 'apex') { uiController.handleFileOpen(doc); }
  });

  vscode.workspace.onDidChangeTextDocument(event => {
    if (event.document.languageId === 'apex') { uiController.analyzeDocument(event.document); }
  });

  vscode.workspace.onDidCloseTextDocument(doc => {
    if (doc.languageId === 'apex') { uiController.handleFileClose(doc); }
  });

  vscode.window.onDidChangeActiveTextEditor(editor => {
    if (editor && editor.document.languageId === 'apex') {
      uiController.updateStatusBarForActiveFile(editor.document);
    } else {
      uiController.updateStatusBarForActiveFile(undefined);
    }
  });
}

export function deactivate() {
  if (uiController) { uiController.dispose(); }
}