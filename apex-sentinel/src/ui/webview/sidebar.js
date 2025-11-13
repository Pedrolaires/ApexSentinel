const vscode = acquireVsCodeApi();

window.addEventListener('load', () => {
  vscode.postMessage({ command: 'ready' });
});

window.addEventListener('message', (event) => {
  const { command } = event.data;
  if (command === 'loadConfig') {renderConfig(event.data.config);}
  if (command === 'updateOpenFiles') {renderFiles(event.data.files);}
  if (command === 'updateDebugMetrics') {renderMetrics(event.data.metrics);}
});

function renderFiles(files) {
  const div = document.getElementById('open-files-list');
  if (!files.length) {
    div.innerHTML = '<p>Nenhum arquivo Apex aberto.</p>';
    return;
  }
  div.innerHTML = files.map(f => {
    let cls = f.score >= 90 ? 'score-good' : f.score >= 70 ? 'score-warn' : 'score-bad';
    return `<div class="file-item"><span>${f.name}</span><span class="${cls}">${f.score}</span></div>`;
  }).join('');
}

function renderConfig(config) {
  const tbody = document.getElementById('rules-body');
  const rules = config.rules;
  const ruleKeys = Object.keys(rules);
  tbody.innerHTML = ruleKeys.map(rule => {
    const r = rules[rule];
    const params = Object.entries(r)
      .filter(([k]) => k !== 'enabled')
      .map(([k, v]) => `<label>${k}: <input type="number" id="${rule}-${k}" value="${v}" /></label>`)
      .join('');
    return `
      <tr>
        <td>${rule}</td>
        <td>${params || '<small>Sem parâmetros.</small>'}</td>
        <td><input type="checkbox" id="${rule}-enabled" ${r.enabled ? 'checked' : ''}></td>
      </tr>`;
  }).join('');
}

document.getElementById('config-form').addEventListener('submit', e => {
  e.preventDefault();
  const tbody = document.getElementById('rules-body');
  const rules = {};
  [...tbody.querySelectorAll('tr')].forEach(row => {
    const rule = row.querySelector('td').textContent;
    const inputs = row.querySelectorAll('input[type=number]');
    const enabled = row.querySelector('input[type=checkbox]').checked;
    const data = { enabled };
    inputs.forEach(input => {
      const key = input.id.split('-')[1];
      data[key] = Number(input.value);
    });
    rules[rule] = data;
  });
  vscode.postMessage({ command: 'saveConfig', config: { rules } });
});

function renderMetrics(metrics) {
  const div = document.getElementById('debug-metrics');
  if (!metrics) {
    div.innerHTML = '<p>Nenhum arquivo ativo.</p>';
    return;
  }

  let methods = '<h4>Métodos</h4>';
  if (metrics.methods?.length) {
    methods += `<table class="metrics-table"><thead>
      <tr><th>Nome</th><th>LOC</th><th>NOP</th><th>CC</th><th>ATFD</th></tr></thead><tbody>`;
    methods += metrics.methods.map(m => `
      <tr>
        <td>${m.name}</td><td>${m.lines}</td><td>${m.nop}</td><td>${m.cc}</td><td>${m.atfd}</td>
      </tr>`).join('');
    methods += '</tbody></table>';
  } else {
    methods += '<p><small>Nenhum método encontrado.</small></p>';
  }

  div.innerHTML = `
    <h4>Classe: ${metrics.className}</h4>
    <table class="metrics-table">
      <tr><td>NOM</td><td>${metrics.nom}</td></tr>
      <tr><td>NOA</td><td>${metrics.noa}</td></tr>
      <tr><td>WMC</td><td>${metrics.wmc}</td></tr>
      <tr><td>LCOM</td><td>${metrics.lcom}</td></tr>
    </table>
    ${methods}`;
}
