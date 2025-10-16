import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export interface RuleConfig {
  enabled: boolean;
  [key: string]: any;
}

export interface FullConfig {
  rules: { [key: string]: RuleConfig };
}

export class ConfigurationManager {
  private config: FullConfig = { rules: {} };
  private configPath: string | undefined;

  constructor() {
    this.initializeConfigPath();
    this.loadConfigFromFile();
  }

  private initializeConfigPath(): void {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (workspaceFolders) {
      const rootPath = workspaceFolders[0].uri.fsPath;
      this.configPath = path.join(rootPath, '.apexsentinelrc.json');
    }
  }

  private loadConfigFromFile(): void {
    if (this.configPath && fs.existsSync(this.configPath)) {
      try {
        const fileContent = fs.readFileSync(this.configPath, 'utf-8');
        this.config = JSON.parse(fileContent);
      } catch (error) {
        vscode.window.showErrorMessage('Erro ao ler .apexsentinelrc.json.');
      }
    }
  }

  public getFullConfig(): FullConfig {
    return this.config;
  }

  public getRuleConfig(ruleName: string): RuleConfig | undefined {
    return this.config.rules[ruleName];
  }

  public saveConfig(newConfig: FullConfig): void {
    if (!this.configPath) {
      vscode.window.showErrorMessage('Nenhum workspace aberto para salvar a configuração.');
      return;
    }
    try {
      const configString = JSON.stringify(newConfig, null, 2);
      fs.writeFileSync(this.configPath, configString, 'utf-8');
      this.config = newConfig;
      vscode.window.showInformationMessage('Configurações do Apex Sentinel salvas.');
    } catch (error) {
      vscode.window.showErrorMessage('Falha ao salvar o arquivo .apexsentinelrc.json.');
    }
  }
}