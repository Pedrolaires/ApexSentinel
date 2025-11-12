import * as vscode from 'vscode';
import * as path from 'path';
import { ISidebarController } from './../analysis/config/ISidebarController';
import { FullConfig } from '../analysis/config/configurationManager';

interface DebugMetricsData {
  className: string;
  nom: number;
  noa: number;
  wmc: number;
  lcom: number;
  methods: Array<{ name: string; lines: number; nop: number; cc: number; atfd: number }>;
}

export class SidebarProvider implements vscode.WebviewViewProvider {
  private view?: vscode.WebviewView;
  private uiController: ISidebarController;

  constructor(uiController: ISidebarController) {
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
      if (data.command === 'ready') {
        this.uiController.refreshSidebarConfig();
        this.uiController.refreshSidebarOpenFiles();
      }
    });
  }
  
  public updateOpenFiles(files: { name: string, score: number }[]): void {
    if (this.view) {
      this.view.webview.postMessage({ command: 'updateOpenFiles', files: files });
    }
  }

  public updateDebugMetrics(metrics: Map<string, any> | undefined): void {
    if (this.view) {
      let dataToSend: DebugMetricsData | null = null;
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
            atfd: m.atfd || 0
          }))
        };
      }
      this.view.webview.postMessage({ command: 'updateDebugMetrics', metrics: dataToSend });
    }
  }

  public updateConfig(config: FullConfig): void {
    if (this.view) {
      this.view.webview.postMessage({ command: 'loadConfig', config: config });
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
              body { font-family: sans-serif; padding: 0 10px; color: var(--vscode-foreground); font-size: 0.9em; }
              .file-item, .metric-item { display: flex; justify-content: space-between; align-items: center; padding: 4px 0; }
              .file-header, .metric-header { font-weight: bold; border-bottom: 1px solid var(--vscode-editorWidget-border); }
              .file-score, .metric-value { font-weight: bold; }
              .score-good { color: var(--vscode-terminal-ansiGreen); }
              .score-warn { color: var(--vscode-terminal-ansiYellow); }
              .score-bad { color: var(--vscode-terminal-ansiRed); }
              table { width: 100%; border-collapse: collapse; margin-top: 10px; }
              th, td { padding: 8px; text-align: left; border-bottom: 1px solid var(--vscode-editorWidget-border); vertical-align: top; }
              th { font-weight: bold; }
              td:last-child, th:last-child { text-align: center; }
              input[type="number"], input[type="text"] { width: 100%; box-sizing: border-box; padding: 4px; background: var(--vscode-input-background); border: 1px solid var(--vscode-input-border); color: var(--vscode-input-foreground); border-radius: 2px; }
              input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
              input[type=number] { -moz-appearance: textfield; }
              label.threshold-label { font-size: 0.8em; margin-top: 5px; display: block; }
              button { margin-top: 15px; padding: 5px 10px; background: var(--vscode-button-background); color: var(--vscode-button-foreground); border: none; border-radius: 2px; cursor: pointer; }
              button:hover { background: var(--vscode-button-hoverBackground); }
              
              .metrics-table { margin-top: 15px; width: 100%; border-collapse: collapse; }
              .metrics-table th, .metrics-table td { padding: 6px 4px; text-align: left; border-bottom: 1px solid var(--vscode-divider-background); }
              .metrics-table th { font-weight: bold; }
              .metrics-table td:last-child { text-align: right; font-weight: bold; font-family: monospace; }
              .metrics-table h4 { margin: 10px 0 5px 0; }

              #debug-metrics { margin-top: 20px; }
              hr { border: 1px solid var(--vscode-editorWidget-border); margin: 20px 0; }
          </style>
      </head>
      <body>
          <h1>Arquivos Abertos</h1>
          <div class="file-item file-header">
              <span>Nome</span>
              <span>Pontuação</span>
          </div>
          <div id="open-files-list">
              <p>Carregando...</p>
          </div>

          <hr>

          <h1>Configurações de Regras</h1>
          <form id="config-form">
              <table>
                  <thead>
                      <tr>
                          <th>Regra</th>
                          <th>Threshold(s)</th>
                          <th>Ativo</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Método Longo</td>
                          <td>
                            <label class="threshold-label">Linhas (LOC):</label>
                            <input type="number" id="longMethod-threshold" min="1" placeholder="Ex: 20">
                            <label class="threshold-label">Parâmetros (NOP):</label>
                            <input type="number" id="longMethod-nopThreshold" min="0" placeholder="Ex: 5">
                            <label class="threshold-label">Complexidade (CC):</label>
                            <input type="number" id="longMethod-ccThreshold" min="1" placeholder="Ex: 10">
                          </td>
                          <td><input type="checkbox" id="longMethod-enabled"></td>
                      </tr>
                      <tr>
                          <td>God Class</td>
                          <td>
                            <label class="threshold-label">Métodos (NOM):</label>
                            <input type="number" id="godClass-nomThreshold" min="1" placeholder="Ex: 15">
                            <label class="threshold-label">Atributos (NOA):</label>
                            <input type="number" id="godClass-noaThreshold" min="1" placeholder="Ex: 10">
                            <label class="threshold-label">Complexidade (WMC):</label>
                            <input type="number" id="godClass-wmcThreshold" min="1" placeholder="Ex: 47">
                            <label class="threshold-label">Falta de Coesão (LCOM):</label>
                            <input type="number" id="godClass-lcomThreshold" min="1" placeholder="Ex: 10">
                          </td>
                          <td><input type="checkbox" id="godClass-enabled"></td>
                      </tr>
                      <tr>
                          <td>Feature Envy</td>
                          <td>
                            <label class="threshold-label">Acessos Externos (ATFD):</label>
                            <input type="number" id="featureEnvy-atfdThreshold" min="1" placeholder="Ex: 5">
                          </td>
                          <td><input type="checkbox" id="featureEnvy-enabled"></td>
                      </tr>
                      <tr>
                          <td>Bloco Catch Vazio</td>
                          <td>
                            <label class="threshold-label">Detecta blocos 'catch' vazios.</label>
                          </td>
                          <td><input type="checkbox" id="emptyCatchBlock-enabled"></td>
                      </tr>

                      <tr>
                          <td>Número Mágico</td>
                          <td>
                            <label class="threshold-label">Detecta literais numéricos (exceto 0, 1) fora de constantes.</label>
                          </td>
                          <td><input type="checkbox" id="magicNumber-enabled"></td>
                      </tr>
                      </tbody>
              </table>
              <button type="submit">Salvar</button>
          </form>

          <hr>
          
          <h1>Debug Métricas</h1>
          <div id="debug-metrics">
              <p>Nenhum arquivo ativo ou análise pendente.</p>
          </div>

          <script>
              const vscode = acquireVsCodeApi();
              const form = document.getElementById('config-form');
              const debugDiv = document.getElementById('debug-metrics');
              const openFilesDiv = document.getElementById('open-files-list');

              window.addEventListener('load', () => { vscode.postMessage({ command: 'ready' }); });

              window.addEventListener('message', event => {
                  const message = event.data;

                  if (message.command === 'loadConfig') {
                      const rules = message.config.rules;
                      
                      const longMethod = rules.longMethod || { enabled: true, threshold: 20, nopThreshold: 5, ccThreshold: 10 };
                      document.getElementById('longMethod-enabled').checked = longMethod.enabled;
                      document.getElementById('longMethod-threshold').value = longMethod.threshold;
                      document.getElementById('longMethod-nopThreshold').value = longMethod.nopThreshold;
                      document.getElementById('longMethod-ccThreshold').value = longMethod.ccThreshold;
                      
                      const godClass = rules.godClass || { enabled: true, nomThreshold: 15, noaThreshold: 10, wmcThreshold: 47, lcomThreshold: 10 };
                      document.getElementById('godClass-enabled').checked = godClass.enabled;
                      document.getElementById('godClass-nomThreshold').value = godClass.nomThreshold;
                      document.getElementById('godClass-noaThreshold').value = godClass.noaThreshold;
                      document.getElementById('godClass-wmcThreshold').value = godClass.wmcThreshold;
                      document.getElementById('godClass-lcomThreshold').value = godClass.lcomThreshold;

                      const featureEnvy = rules.featureEnvy || { enabled: true, atfdThreshold: 5 };
                      document.getElementById('featureEnvy-enabled').checked = featureEnvy.enabled;
                      document.getElementById('featureEnvy-atfdThreshold').value = featureEnvy.atfdThreshold;

                      const emptyCatchBlock = rules.emptyCatchBlock || { enabled: true };
                      document.getElementById('emptyCatchBlock-enabled').checked = emptyCatchBlock.enabled;

                      const magicNumber = rules.magicNumber || { enabled: true };
                      document.getElementById('magicNumber-enabled').checked = magicNumber.enabled;
                  }

                  if (message.command === 'updateOpenFiles') {
                      if (message.files.length === 0) {
                          openFilesDiv.innerHTML = '<p>Nenhum arquivo Apex aberto.</p>';
                          return;
                      }
                      openFilesDiv.innerHTML = message.files.map(file => {
                          let scoreClass = 'score-good';
                          if (file.score < 100 && file.score >= 70) scoreClass = 'score-warn';
                          if (file.score < 70) scoreClass = 'score-bad';
                          return \`
                              <div class="file-item">
                                  <span>\${file.name}</span>
                                  <span class="file-score \${scoreClass}">\${file.score}</span>
                              </div>
                          \`;
                      }).join('');
                  }

                  if (message.command === 'updateDebugMetrics') {
                      const metrics = message.metrics;
                      if (!metrics) {
                          debugDiv.innerHTML = '<p>Nenhum arquivo ativo ou análise pendente.</p>';
                          return;
                      }

                      let methodsHtml = '<h4>Métricas por Método</h4>';
                      if (metrics.methods && metrics.methods.length > 0) {
                          methodsHtml += '<table class="metrics-table"><thead><tr><th>Método</th><th>LOC</th><th>NOP</th><th>CC</th><th>ATFD</th></tr></thead><tbody>';
                          methodsHtml += metrics.methods.map(m => \`
                              <tr>
                                <td>\${m.name}</td>
                                <td>\${m.lines}</td>
                                <td>\${m.nop}</td>
                                <td>\${m.cc}</td>
                                <td>\${m.atfd}</td>
                              </tr>
                          \`).join('');
                          methodsHtml += '</tbody></table>';
                      } else {
                          methodsHtml += '<p><small>Nenhum método encontrado.</small></p>';
                      }

                      debugDiv.innerHTML = \`
                          <h4>Métricas da Classe: \${metrics.className}</h4>
                          <table class="metrics-table">
                            <tbody>
                              <tr>
                                <td>Métodos (NOM)</td>
                                <td>\${metrics.nom}</td>
                              </tr>
                              <tr>
                                <td>Atributos (NOA)</td>
                                <td>\${metrics.noa}</td>
                              </tr>
                              <tr>
                                <td>Complexidade Total (WMC)</td>
                                <td>\${metrics.wmc}</td>
                              </tr>
                              <tr>
                                <td>Falta de Coesão (LCOM)</td>
                                <td>\${metrics.lcom}</td>
                              </tr>
                            </tbody>
                          </table>
                          \${methodsHtml}
                      \`;
                  }
              });

              form.addEventListener('submit', (event) => {
                  event.preventDefault();
                  const newConfig = {
                      rules: {
                          longMethod: {
                              enabled: document.getElementById('longMethod-enabled').checked,
                              threshold: parseInt(document.getElementById('longMethod-threshold').value, 10),
                              nopThreshold: parseInt(document.getElementById('longMethod-nopThreshold').value, 10),
                              ccThreshold: parseInt(document.getElementById('longMethod-ccThreshold').value, 10)
                          },
                          godClass: {
                              enabled: document.getElementById('godClass-enabled').checked,
                              nomThreshold: parseInt(document.getElementById('godClass-nomThreshold').value, 10),
                              noaThreshold: parseInt(document.getElementById('godClass-noaThreshold').value, 10),
                              wmcThreshold: parseInt(document.getElementById('godClass-wmcThreshold').value, 10),
                              lcomThreshold: parseInt(document.getElementById('godClass-lcomThreshold').value, 10)
                          },
                          featureEnvy: {
                              enabled: document.getElementById('featureEnvy-enabled').checked,
                              atfdThreshold: parseInt(document.getElementById('featureEnvy-atfdThreshold').value, 10)
                          },
                          emptyCatchBlock: {
                              enabled: document.getElementById('emptyCatchBlock-enabled').checked
                          },
                          magicNumber: {
                              enabled: document.getElementById('magicNumber-enabled').checked
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