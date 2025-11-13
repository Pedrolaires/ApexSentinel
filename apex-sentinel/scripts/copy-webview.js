const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src/ui/webview');
const destDir = path.resolve(__dirname, '../out/ui/webview');

console.log('📁 Origem:', srcDir);
console.log('📁 Destino:', destDir);

if (!fs.existsSync(srcDir)) {
  console.error('❌ Diretório de origem não encontrado:', srcDir);
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir);
if (files.length === 0) {
  console.warn('⚠️ Nenhum arquivo encontrado em', srcDir);
} else {
  files.forEach((file) => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copiado: ${file}`);
  });
}
