import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export interface IFileSystem {
    readFileSync(path: string, encoding: string): string;
    existsSync(path: string): boolean;
}

export class NodeFileSystem implements IFileSystem {
    readFileSync(path: string, encoding: string): string {
        return fs.readFileSync(path, encoding as BufferEncoding);
    }
    existsSync(path: string): boolean {
        return fs.existsSync(path);
    }
}

export interface RuleConfig {
    enabled: boolean;
    [key: string]: any;
}

export interface ProjectConfigFile {
    rules: {
        [key: string]: Partial<RuleConfig>;
    };
}

export interface FullConfig {
    rules: {
        [key: string]: RuleConfig;
    };
}

export class ConfigurationManager {
    private config: FullConfig;
    private fileWatcher: vscode.FileSystemWatcher | undefined;
    private fsProvider: IFileSystem; // Dependência injetada

    public onConfigDidChange: vscode.EventEmitter<FullConfig> = new vscode.EventEmitter<FullConfig>();

    constructor(fsProvider?: IFileSystem) {
        this.fsProvider = fsProvider || new NodeFileSystem();
        this.config = this.loadFullConfig();
        this.setupFileWatcher();
    }

    public getRuleConfig(ruleName: string): RuleConfig {
        return {...(this.config.rules[ruleName] || { enabled: false }) };
    }

    public getFullConfig(): FullConfig {
        return this.config;
    }

    private loadFullConfig(): FullConfig {
        const workspaceConfig = this.loadVscodeSettings();
        const projectConfig = this.loadProjectFileConfig();

        const mergedRules = {...workspaceConfig.rules };
        for (const ruleName in projectConfig.rules) {
            mergedRules[ruleName] = {
               ...(mergedRules[ruleName] || {}),
               ...projectConfig.rules[ruleName],
            };
        }
        
        return { rules: mergedRules };
    }

    private loadProjectFileConfig(): Partial<ProjectConfigFile> {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        
        if (!workspaceFolders || workspaceFolders.length === 0) {
            return { rules: {} };
        }

        const rootPath = workspaceFolders[0].uri.fsPath;
        const configPath = path.join(rootPath, '.apexsentinelrc.json');

        try {
            if (this.fsProvider.existsSync(configPath)) {
                const fileContent = this.fsProvider.readFileSync(configPath, 'utf-8');
                const parsedConfig = JSON.parse(fileContent) as ProjectConfigFile;
                return parsedConfig;
            }
        } catch (error) {
            vscode.window.showErrorMessage(`Erro ao ler ".apexsentinelrc.json": ${error}`);
        }
        
        return { rules: {} };
    }

    private loadVscodeSettings(): FullConfig {
        const config = vscode.workspace.getConfiguration('apex-sentinel');
        
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
                },
                emptyCatchBlock: {
                    enabled: config.get('rules.emptyCatchBlock.enabled', true)
                },
                magicNumber: {
                    enabled: config.get('rules.magicNumber.enabled', true)
                },
                nestedLoops: {
                    enabled: config.get('rules.nestedLoops.enabled', true),
                    maxDepth: config.get('rules.nestedLoops.maxDepth', 2)
                }
            },
        };
    }

    private setupFileWatcher(): void {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            return;
        }

        const rootPath = workspaceFolders[0].uri.fsPath;
        const watchPattern = new vscode.RelativePattern(rootPath, '.apexsentinelrc.json');
        
        this.fileWatcher = vscode.workspace.createFileSystemWatcher(watchPattern);

        const reload = () => {
            console.log('[ConfigManager] ".apexsentinelrc.json" modificado. Recarregando...');
            this.config = this.loadFullConfig();
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