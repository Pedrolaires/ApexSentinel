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
        await this.uiController.analyzeActiveFile();
      }
    );

    const openDocCommand = vscode.commands.registerCommand(
      'apex-sentinel.openRuleDocumentation',
      (url: string) => {
        vscode.env.openExternal(vscode.Uri.parse(url));
      }
    );

    context.subscriptions.push(analyzeFileCommand, openDocCommand);
  }
}