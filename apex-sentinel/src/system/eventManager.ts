import * as vscode from 'vscode';
import { UserInterfaceController } from '../ui/userInterfaceController';

export class EventManager {
  private uiController: UserInterfaceController;

  constructor(uiController: UserInterfaceController) {
    this.uiController = uiController;
  }

  public registerEvents(context: vscode.ExtensionContext) {
    const onTypeListener = vscode.workspace.onDidChangeTextDocument(
      async (event) => {
        if (event.document.languageId === 'apex') {
          await this.uiController.analyzeDocument(event.document);
        }
      }
    );

    const onOpenListener = vscode.workspace.onDidOpenTextDocument(
      async (document) => {
        if (document.languageId === 'apex') {
          this.uiController.handleFileOpen(document);
        }
      }
    );

    const onCloseListener = vscode.workspace.onDidCloseTextDocument(
      async (document) => {
        if (document.languageId === 'apex') {
          this.uiController.handleFileClose(document);
        }
      }
    );

    const onChangeActiveEditorListener = vscode.window.onDidChangeActiveTextEditor(
      async (editor) => {
        if (editor && editor.document.languageId === 'apex') {
          this.uiController.updateStatusBarForActiveFile(editor.document);
        } else {
          this.uiController.updateStatusBarForActiveFile(undefined);
        }
      }
    );

    context.subscriptions.push(
        onTypeListener,
        onOpenListener,
        onCloseListener,
        onChangeActiveEditorListener
    );
  }
}