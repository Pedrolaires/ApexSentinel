import * as vscode from 'vscode';
import { UserInterfaceController } from '../ui/userInterfaceController';

export class EventManager {
  private uiController: UserInterfaceController;
  private debounceTimers: Map<string, NodeJS.Timeout> = new Map();
  private readonly DEBOUNCE_DELAY_MS = 500;

  constructor(uiController: UserInterfaceController) {
    this.uiController = uiController;
  }

  public registerEvents(context: vscode.ExtensionContext) {
    const onTypeListener = vscode.workspace.onDidChangeTextDocument(
      (event) => {
        if (event.document.languageId === 'apex') {
          this.debounceAnalysis(event.document);
        }
      }
    );

    const onOpenListener = vscode.workspace.onDidOpenTextDocument(
      (document) => {
        if (document.languageId === 'apex') {
          this.uiController.handleFileOpen(document);
        }
      }
    );

    const onCloseListener = vscode.workspace.onDidCloseTextDocument(
      (document) => {
        if (document.languageId === 'apex') {
          this.uiController.handleFileClose(document);
          this.debounceTimers.delete(document.uri.fsPath);
        }
      }
    );

    const onChangeActiveEditorListener = vscode.window.onDidChangeActiveTextEditor(
      (editor) => {
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

  private debounceAnalysis(document: vscode.TextDocument): void {
    const filePath = document.uri.fsPath;

    if (this.debounceTimers.has(filePath)) {
      clearTimeout(this.debounceTimers.get(filePath)!);
    }

    const timer = setTimeout(() => {
      this.uiController.analyzeDocument(document);
      this.debounceTimers.delete(filePath);
    }, this.DEBOUNCE_DELAY_MS);

    this.debounceTimers.set(filePath, timer);
  }
}