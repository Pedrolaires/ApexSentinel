import * as vscode from 'vscode';
import { AnalysisResult } from '../analysis/analysisResult';
import { FullConfig } from '../analysis/config/configurationManager';
import { UserInterfaceController } from './userInterfaceController';

export class SidebarProvider implements vscode.WebviewViewProvider {
  private view?: vscode.WebviewView;
  private uiController: UserInterfaceController;

  constructor(uiController: UserInterfaceController) {
    this.uiController = uiController;
  }

  resolveWebviewView(webviewView: vscode.WebviewView): void {
    this.view = webviewView;
    webviewView.webview.options = { enableScripts: true };
    webviewView.webview.html = this.getHtmlForWebview();

    webviewView.webview.onDidReceiveMessage(async (data) => {
      if (data.command === 'saveConfig') {
        await this.uiController.saveConfiguration(data.config);
      }
    });

    this.uiController.refreshSidebarConfig();
  }

  public updateAnalysisResults(results: AnalysisResult[]): void {
    if (this.view) {
      this.view.webview.postMessage({
        command: 'updateAnalysis',
        results: results,
      });
    }
  }

  public updateConfig(config: FullConfig): void {
    if (this.view) {
      this.view.webview.postMessage({
        command: 'loadConfig',
        config: config,
      });
    }
  }

  private getHtmlForWebview(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Apex Sentinel</title>
          <style>
              body { font-family: sans-serif; padding: 0 10px; color: var(--vscode-foreground); }
              table { width: 100%; border-collapse: collapse; margin-top: 10px; }
              th, td { padding: 8px; text-align: left; border-bottom: 1px solid var(--vscode-editorWidget-border); }
              th { font-weight: bold; }
              td:last-child, th:last-child { text-align: center; }
              input[type="number"] { width: 100%; box-sizing: border-box; padding: 4px; background: var(--vscode-input-background); border: 1px solid var(--vscode-input-border); color: var(--vscode-input-foreground); border-radius: 2px; }
              
              /* Adicionado: Remove as setas do campo de número */
              input[type=number]::-webkit-outer-spin-button,
              input[type=number]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              input[type=number] {
                -moz-appearance: textfield;
              }

              button { margin-top: 15px; padding: 5px 10px; background: var(--vscode-button-background); color: var(--vscode-button-foreground); border: none; border-radius: 2px; cursor: pointer; }
              button:hover { background: var(--vscode-button-hoverBackground); }
              .issue { padding: 10px; border: 1px solid var(--vscode-editorWidget-border); border-radius: 4px; margin-bottom: 10px; }
              #analysis-results { margin-top: 20px; }
              hr { border: 1px solid var(--vscode-editorWidget-border); margin: 20px 0; }
          </style>
      </head>
      <body>
          <h1>Configurações de Regras</h1>
          <form id="config-form">
              <table>
                  <thead>
                      <tr>
                          <th>Regra</th>
                          <th>Threshold</th>
                          <th>Ativo</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Método Longo</td>
                          <td><input type="number" id="longMethod-threshold" min="1"></td>
                          <td><input type="checkbox" id="longMethod-enabled"></td>
                      </tr>
                  </tbody>
              </table>
              <button type="submit">Salvar</button>
          </form>

          <hr>
          
          <h1>Análise do Arquivo</h1>
          <div id="analysis-results">
            <p>Aguardando análise...</p>
          </div>

          <script>
              const vscode = acquireVsCodeApi();
              const form = document.getElementById('config-form');
              const analysisDiv = document.getElementById('analysis-results');

              window.addEventListener('message', event => {
                  const message = event.data;
                  if (message.command === 'loadConfig') {
                      const longMethod = message.config.rules.longMethod || { enabled: true, threshold: 20 };
                      document.getElementById('longMethod-enabled').checked = longMethod.enabled;
                      document.getElementById('longMethod-threshold').value = longMethod.threshold;
                  }
                  if (message.command === 'updateAnalysis') {
                      if (message.results.length === 0) {
                        analysisDiv.innerHTML = '<p>Nenhum problema encontrado. Ótimo trabalho!</p>';
                        return;
                      }
                      analysisDiv.innerHTML = message.results.map(r => \`
                        <div class="rule">
                          <h4>\${r.type}</h4>
                          <p>\${r.message}</p>
                          <p><small>Linha: \${r.line}</small></p>
                        </div>
                      \`).join('');
                  }
              });

              form.addEventListener('submit', (event) => {
                  event.preventDefault();
                  const newConfig = {
                      rules: {
                          longMethod: {
                              enabled: document.getElementById('longMethod-enabled').checked,
                              threshold: parseInt(document.getElementById('longMethod-threshold').value, 10)
                          }
                      }
                  };
                  vscode.postMessage({ command: 'saveConfig', config: newConfig });
              });
          </script>
      </body>
      </html>
    `;
  }
}