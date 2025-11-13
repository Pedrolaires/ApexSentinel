const vscode = acquireVsCodeApi();

window.addEventListener('load', () => vscode.postMessage({ command: 'ready' }));

window.addEventListener('message', event => {
  const msg = event.data;

  if (msg.command === 'updateOpenFiles') {renderOpenFiles(msg.files);}
  if (msg.command === 'updateDebugMetrics') {renderDebugMetrics(msg.metrics);}
  if (msg.command === 'loadConfig') {renderConfig(msg.config);}
});

function renderOpenFiles(files) {
  const div = document.getElementById('open-files-list');
  if (!files.length) {
    div.innerHTML = '<p>Nenhum arquivo Apex aberto.</p>';
    return;
  }
  div.innerHTML = files.map(f => {
    const scoreClass = f.score >= 90 ? 'score-good' : f.score >= 70 ? 'score-warn' : 'score-bad';
    return `<div class="file-item"><span>${f.name}</span><span class="file-score ${scoreClass}">${f.score}</span></div>`;
  }).join('');
}

function renderDebugMetrics(metrics) {
  const debugDiv = document.getElementById('debug-metrics');
  if (!metrics) {
    debugDiv.innerHTML = '<p>Nenhum arquivo ativo ou análise pendente.</p>';
    return;
  }

  let html = `
    <h4>Classe: ${metrics.className}</h4>
    <table>
      <tr><td>Métodos (NOM)</td><td>${metrics.nom}</td></tr>
      <tr><td>Atributos (NOA)</td><td>${metrics.noa}</td></tr>
      <tr><td>Complexidade (WMC)</td><td>${metrics.wmc}</td></tr>
      <tr><td>Coesão (LCOM)</td><td>${metrics.lcom}</td></tr>
    </table>
  `;

  if (metrics.methods?.length) {
    html += '<h4>Métodos</h4><table><tr><th>Nome</th><th>LOC</th><th>NOP</th><th>CC</th><th>ATFD</th></tr>';
    html += metrics.methods.map(m => `
      <tr><td>${m.name}</td><td>${m.lines}</td><td>${m.nop}</td><td>${m.cc}</td><td>${m.atfd}</td></tr>
    `).join('');
    html += '</table>';
  }

  debugDiv.innerHTML = html;
}

function renderConfig(config) {
  const container = document.getElementById('rules-container');
  const generalDiv = document.getElementById('general-rules');
  container.innerHTML = '';
  generalDiv.innerHTML = '';

  const ruleIcons = {
    emptyCatchBlock: '🪤',
    magicNumber: '🔢',
    nestedLoops: '🔁'
  };

  for (const [name, rule] of Object.entries(config.rules)) {
    if (['longMethod', 'godClass', 'featureEnvy'].includes(name)) {
      const card = document.createElement('div');
      card.className = 'rule-card';
      card.innerHTML = `
        <div class="rule-header" id="${name}-header">
          <span><span class="arrow">▼</span> <strong>${name}</strong></span>
          <input type="checkbox" id="${name}-enabled" ${rule.enabled ? 'checked' : ''}>
        </div>
        <div class="rule-inputs" id="${name}-inputs">
          ${Object.entries(rule)
            .filter(([k]) => k !== 'enabled')
            .map(([k, v]) => `
              <label>${k}</label>
              <input type="number" id="${name}-${k}" value="${v}" min="0">
            `).join('')}
        </div>
      `;
      container.appendChild(card);

      const header = card.querySelector(`#${name}-header`);
      const inputs = card.querySelector(`#${name}-inputs`);
      header.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT') {return;}
        inputs.classList.toggle('collapsed');
        header.querySelector('.arrow').classList.toggle('collapsed');
      });
    } else {
      const icon = ruleIcons[name] || '⚙️';
      const div = document.createElement('div');
      div.className = 'general-rule';
      div.innerHTML = `
        <div class="general-rule-icon" title="${name}" id="${name}-icon">${icon}</div>
        <input type="checkbox" id="${name}-enabled" ${rule.enabled ? 'checked' : ''}>
      `;
      generalDiv.appendChild(div);

      if (name === 'nestedLoops') {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `${name}-maxDepth`;
        input.className = 'nested-input';
        input.value = rule.maxDepth || 2;
        div.appendChild(input);

        const iconEl = div.querySelector(`#${name}-icon`);
        iconEl.addEventListener('click', () => {
          input.style.display = 'block';
          input.focus();
        });
        input.addEventListener('blur', () => {
          input.style.display = 'none';
        });
      }
    }
  }

  document.getElementById('config-form').onsubmit = saveConfig;
  document.getElementById('reset-defaults').onclick = () => vscode.postMessage({ command: 'resetDefaults' });
}

function saveConfig(event) {
  event.preventDefault();

  const rules = {};
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    const name = cb.id.replace('-enabled', '');
    rules[name] = { enabled: cb.checked };
  });

  document.querySelectorAll('input[type="number"]').forEach(inp => {
    const [rule, key] = inp.id.split('-');
    if (!rules[rule]) {rules[rule] = {};}
    rules[rule][key] = parseInt(inp.value, 10);
  });

  vscode.postMessage({ command: 'saveConfig', config: { rules } });
}
