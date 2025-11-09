import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// Interface para a configuração de uma única regra
export interface RuleConfig {
  enabled: boolean;
  [key: string]: any; // Para thresholds customizados (ex: threshold, nopThreshold, etc.)
}

// Interface para a estrutura do arquivo apex-sentinel.json
export interface ProjectConfigFile {
  rules: {
    [key: string]: Partial<RuleConfig>;
  };
}

// Interface para a configuração completa que a aplicação usa
export interface FullConfig {
  rules: {
    [key: string]: RuleConfig;
  };
}

export class ConfigurationManager {
  private config: FullConfig;
  private fileWatcher: vscode.FileSystemWatcher | undefined;
  
  // Evento que a UI (Sidebar) pode "ouvir" para saber quando deve se atualizar
  public onConfigDidChange: vscode.EventEmitter<FullConfig> = new vscode.EventEmitter<FullConfig>();

  constructor() {
    this.config = this.loadFullConfig();
    this.setupFileWatcher();
  }

  /**
   * Retorna a configuração de uma regra específica (ex: "longMethod")
   */
  public getRuleConfig(ruleName: string): RuleConfig {
    // Retorna uma cópia para evitar mutações inesperadas
    return { ...(this.config.rules[ruleName] || { enabled: false }) };
  }

  /**
   * Retorna a configuração completa
   */
  public getFullConfig(): FullConfig {
    return this.config;
  }

  /**
   * Tenta carregar a configuração, priorizando o arquivo de projeto.
   */
  private loadFullConfig(): FullConfig {
    const workspaceConfig = this.loadVscodeSettings(); // Fallback
    const projectConfig = this.loadProjectFileConfig(); // Prioridade

    // "Mescla" as duas, dando prioridade ao projectConfig
    // O deep merge aqui garante que "enabled: false" no projeto sobrescreva "enabled: true" no workspace
    const mergedRules = { ...workspaceConfig.rules };
    for (const ruleName in projectConfig.rules) {
      mergedRules[ruleName] = {
        ...(mergedRules[ruleName] || {}), // Pega a base do workspace (se existir)
        ...projectConfig.rules[ruleName], // Sobrescreve com o projeto
      };
    }
    
    console.log('[ConfigManager] Configuração final carregada:', mergedRules);
    return { rules: mergedRules };
  }

  /**
   * Carrega a configuração do arquivo apex-sentinel.json na raiz do projeto
   */
  private loadProjectFileConfig(): Partial<ProjectConfigFile> {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      return { rules: {} };
    }

    const rootPath = workspaceFolders[0].uri.fsPath;
    const configPath = path.join(rootPath, 'apex-sentinel.json');

    try {
      if (fs.existsSync(configPath)) {
        const fileContent = fs.readFileSync(configPath, 'utf-8');
        const parsedConfig = JSON.parse(fileContent) as ProjectConfigFile;
        console.log('[ConfigManager] Carregada configuração do "apex-sentinel.json"');
        return parsedConfig;
      }
    } catch (error) {
      vscode.window.showErrorMessage(`[Apex Sentinel] Erro ao ler "apex-sentinel.json": ${error}`);
    }
    
    return { rules: {} };
  }

  /**
   * Carrega a configuração do VS Code (settings.json)
   */
  private loadVscodeSettings(): FullConfig {
    const config = vscode.workspace.getConfiguration('apex-sentinel');
    
    // Lê as configurações do seu package.json
    return {
      rules: {
        longMethod: {
          enabled: config.get('rules.longMethod.enabled', true),
          threshold: config.get('rules.longMethod.threshold', 20),
          nopThreshold: config.get('rules.longMethod.nopThreshold', 5),
          ccThreshold: config.get('rules.longMethod.ccThreshold', 10),
        },
        godClass: {
          enabled: config.get('rules.godClass.enabled', true),
          nomThreshold: config.get('rules.godClass.nomThreshold', 15),
          noaThreshold: config.get('rules.godClass.noaThreshold', 10),
          wmcThreshold: config.get('rules.godClass.wmcThreshold', 47),
          lcomThreshold: config.get('rules.godClass.lcomThreshold', 10),
        },
        featureEnvy: {
          enabled: config.get('rules.featureEnvy.enabled', true),
          atfdThreshold: config.get('rules.featureEnvy.atfdThreshold', 5)
        }
      },
    };
  }

  /**
   * Observa mudanças no arquivo apex-sentinel.json
   */
  private setupFileWatcher(): void {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      return;
    }
    
    const rootPath = workspaceFolders[0].uri.fsPath;
    const watchPattern = new vscode.RelativePattern(rootPath, 'apex-sentinel.json');
    this.fileWatcher = vscode.workspace.createFileSystemWatcher(watchPattern);

    const reload = () => {
      console.log('[ConfigManager] "apex-sentinel.json" modificado. Recarregando...');
      this.config = this.loadFullConfig();
      // Emite o evento para que a UI (Sidebar) possa se atualizar
      this.onConfigDidChange.fire(this.config);
    };

    this.fileWatcher.onDidChange(reload);
    this.fileWatcher.onDidCreate(reload);
    this.fileWatcher.onDidDelete(reload);
  }

  public dispose(): void {
    this.fileWatcher?.dispose();
    this.onConfigDidChange.dispose();
  }
}