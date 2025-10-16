import * as vscode from 'vscode';
import { UserInterfaceController } from './ui/userInterfaceController';
import { CommandManager } from './system/commandManager';
import { ProviderManager } from './system/providerManager';
import { EventManager } from './system/eventManager';

let uiController: UserInterfaceController;

export function activate(context: vscode.ExtensionContext) {
  // O context é passado aqui, pois o UIController pode precisar dele para
  // criar serviços que acessam o estado da extensão ou seus arquivos.
  uiController = new UserInterfaceController(context);

  // Cada gerenciador é criado e sua função de registro é chamada.
  const commandManager = new CommandManager(uiController);
  commandManager.registerCommands(context);

  const providerManager = new ProviderManager(uiController);
  providerManager.registerProviders(context);

  const eventManager = new EventManager(uiController);
  eventManager.registerEvents(context);
}

export function deactivate() {
  if (uiController) {
    uiController.dispose();
  }
}