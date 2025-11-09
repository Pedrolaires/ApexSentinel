import * as vscode from 'vscode';
import { UserInterfaceController } from '../ui/userInterfaceController';

export class CommandManager {
  private uiController: UserInterfaceController;

  constructor(uiController: UserInterfaceController) {
    this.uiController = uiController;
  }

  public registerCommands(context: vscode.ExtensionContext) {
    const analyzeFileCommand = vscode.commands.registerCommand(
      'apex-sentinel.analyzeFile',
      async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'apex') {
          this.uiController.analyzeDocument(editor.document);
          vscode.window.showInformationMessage('Análise do Apex Sentinel executada.');
        } else {
          vscode.window.showWarningMessage('Nenhum arquivo Apex ativo para analisar.');
        }
      }
    );

    const openDocCommand = vscode.commands.registerCommand(
      'apex-sentinel.openRuleDocumentation',
      (url: string) => {
        if (url) {
          vscode.env.openExternal(vscode.Uri.parse(url));
        }
      }
    );

    context.subscriptions.push(analyzeFileCommand, openDocCommand);
  }
}