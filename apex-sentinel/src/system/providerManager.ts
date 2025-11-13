import * as vscode from 'vscode';
import { CodeActionProvider } from '../ui/codeActionProvider';

export class ProviderManager {
  public registerProviders(context: vscode.ExtensionContext) {
    const codeActionProvider = vscode.languages.registerCodeActionsProvider(
      { language: 'apex', scheme: 'file' },
      new CodeActionProvider(),
      {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix],
      }
    );

    context.subscriptions.push(codeActionProvider);
  }
}
