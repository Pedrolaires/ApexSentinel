import * as vscode from 'vscode';
import { UserInterfaceController } from './ui/userInterfaceController';

let uiController: UserInterfaceController;

export function activate(context: vscode.ExtensionContext) {
  uiController = new UserInterfaceController(context);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      'apex-sentinel-sidebar',
      uiController.sidebarProvider
    )
  );

  vscode.workspace.textDocuments.forEach(doc => {
    if (doc.languageId === 'apex') {uiController.handleFileOpen(doc);}
  });

  vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId === 'apex') {uiController.handleFileOpen(doc);}
  });

  vscode.workspace.onDidChangeTextDocument(event => {
    if (event.document.languageId === 'apex') {uiController.analyzeDocument(event.document);}
  });

  vscode.workspace.onDidCloseTextDocument(doc => {
    if (doc.languageId === 'apex') {uiController.handleFileClose(doc);}
  });

  vscode.window.onDidChangeActiveTextEditor(editor => {
    uiController.updateStatusBarForActiveFile(editor?.document);
  });
}

export function deactivate() {
  if (uiController) {uiController.dispose();}
}
