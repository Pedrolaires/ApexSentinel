import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { FullConfig } from '../analysis/config/configurationManager';
import { ISidebarController } from './../analysis/config/ISidebarController';

export class SidebarProvider implements vscode.WebviewViewProvider {
  private view?: vscode.WebviewView;
  private uiController: ISidebarController;
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext, uiController: ISidebarController) {
    this.context = context;
    this.uiController = uiController;
  }

  resolveWebviewView(webviewView: vscode.WebviewView): void {
    this.view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.file(path.join(this.context.extensionPath, 'out', 'ui', 'webview'))],
    };

    webviewView.webview.html = this.getHtml(webviewView.webview);

    webviewView.webview.onDidReceiveMessage(async (data) => {
      if (data.command === 'saveConfig') {
        await this.uiController.saveConfiguration(data.config);
      }
      if (data.command === 'ready') {
        this.uiController.refreshSidebarConfig();
        this.uiController.refreshSidebarOpenFiles();
      }
    });
  }

  private getHtml(webview: vscode.Webview): string {
    const htmlPath = path.join(this.context.extensionPath, 'out/ui/webview/sidebar.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    const cssUri = webview.asWebviewUri(vscode.Uri.file(path.join(this.context.extensionPath, 'out/ui/webview/sidebar.css')));
    const jsUri = webview.asWebviewUri(vscode.Uri.file(path.join(this.context.extensionPath, 'out/ui/webview/sidebar.js')));

    return html.replace('{{CSS_URI}}', cssUri.toString()).replace('{{JS_URI}}', jsUri.toString());
  }

  public updateOpenFiles(files: { name: string; score: number }[]): void {
    this.view?.webview.postMessage({ command: 'updateOpenFiles', files });
  }

  public updateDebugMetrics(metrics: Map<string, any> | undefined): void {
    if (!this.view) {return;}

    let dataToSend: any = null;
    if (metrics) {
      const classData = metrics.get('class') || {};
      const methodData = metrics.get('methods') || [];
      dataToSend = {
        className: classData.name || 'N/A',
        nom: classData.nom || 0,
        noa: classData.noa || 0,
        wmc: classData.wmc || 0,
        lcom: classData.lcom || 0,
        methods: methodData.map((m: any) => ({
          name: m.name || 'N/A',
          lines: m.lines || 0,
          nop: m.nop || 0,
          cc: m.cc || 0,
          atfd: m.atfd || 0,
        })),
      };
    }

    this.view.webview.postMessage({ command: 'updateDebugMetrics', metrics: dataToSend });
  }

  public updateConfig(config: FullConfig): void {
    this.view?.webview.postMessage({ command: 'loadConfig', config });
  }
}
