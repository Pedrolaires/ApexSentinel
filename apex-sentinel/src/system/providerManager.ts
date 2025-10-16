import * as vscode from 'vscode';
import { CodeActionProvider } from '../ui/codeActionProvider';
import { UserInterfaceController } from '../ui/userInterfaceController';

export class ProviderManager {
  private uiController: UserInterfaceController;

  constructor(uiController: UserInterfaceController) {
    this.uiController = uiController;
  }

  public registerProviders(context: vscode.ExtensionContext) {
    const codeActionProvider = vscode.languages.registerCodeActionsProvider(
      { language: 'apex', scheme: 'file' },
      new CodeActionProvider(),
      {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix],
      }
    );

    const sidebarProvider = vscode.window.registerWebviewViewProvider(
      'apex-sentinel-sidebar',
      this.uiController.getSidebarProvider()
    );

    context.subscriptions.push(codeActionProvider, sidebarProvider);
  }
}