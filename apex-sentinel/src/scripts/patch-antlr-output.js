// scripts/patch-antlr-output.js
const fs = require('fs');
const path = require('path');

const parserDir = path.join(__dirname, '..', 'src', 'parser');
const lexerFile = path.join(parserDir, 'apexLexer.ts');

if (!fs.existsSync(lexerFile)) {
  console.error('arquivo não encontrado:', lexerFile);
  process.exit(1);
}

let text = fs.readFileSync(lexerFile, 'utf8');

// 1) substituir chamadas Java Character.* por chamadas this.* e adaptar a passagem de params
// Ex: Character.isJavaIdentifierStart(_input.LA(-1))  --> this.isJavaIdentifierStart(_input.LA(-1))
text = text.replace(/Character\.isJavaIdentifierStart\(/g, 'this.isJavaIdentifierStart(');
text = text.replace(/Character\.isJavaIdentifierPart\(/g, 'this.isJavaIdentifierPart(');

// 2) substituir chamadas Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1))
//    por this.toCodePoint(_input.LA(-2), _input.LA(-1))
text = text.replace(/Character\.toCodePoint\s*\(\s*\(char\)\s*_input\.LA\(-2\)\s*,\s*\(char\)\s*_input\.LA\(-1\)\s*\)/g, 'this.toCodePoint(_input.LA(-2), _input.LA(-1))');

// 3) se existir outro formato de cast sem espaços:
text = text.replace(/Character\.toCodePoint\(\(char\)_input\.LA\(-2\),\(char\)_input\.LA\(-1\)\)/g, 'this.toCodePoint(_input.LA(-2), _input.LA(-1))');

// 4) garantir que inserimos os helpers apenas uma vez — procura por um marcador
if (!/\/\/ ANTLR_TS_HELPERS_MARKER/.test(text)) {
  const helpers = `

// ANTLR_TS_HELPERS_MARKER - helpers injected by scripts/patch-antlr-output.js
/**
 * Helpers injected to replace Java Character methods. These are minimal implementations
 * sufficient for identifier detection in Apex/Java-like languages.
 */
private toCodePoint(high: number, low: number): number {
  // both high and low are code units (UTF-16). If out of range return -1
  if (high <= 0 || low <= 0) return -1;
  return ((high - 0xD800) << 10) + (low - 0xDC00) + 0x10000;
}

private isJavaIdentifierStart(ch: number): boolean {
  if (ch <= 0) return false;
  // only basic check: ASCII letters, underscore and dollar (sufficient for most Apex code)
  if (ch <= 0x7F) {
    return (ch >= 0x41 && ch <= 0x5A) || (ch >= 0x61 && ch <= 0x7A) || ch === 0x5F || ch === 0x24;
  }
  // for non-ascii we assume true (conservative)
  return true;
}

private isJavaIdentifierPart(ch: number): boolean {
  if (ch <= 0) return false;
  if (ch <= 0x7F) {
    return (ch >= 0x41 && ch <= 0x5A) || (ch >= 0x61 && ch <= 0x7A)
      || (ch >= 0x30 && ch <= 0x39) || ch === 0x5F || ch === 0x24;
  }
  return true;
}
`;
  // inserir helpers antes do final da classe: procurar pelo fechamento da classe '}' no final do arquivo
  // Coloca antes do último '}\n' (assume que é fechamento da classe)
  const lastBraceIndex = text.lastIndexOf('}\n');
  if (lastBraceIndex !== -1) {
    const before = text.slice(0, lastBraceIndex);
    const after = text.slice(lastBraceIndex);
    text = before + helpers + after;
  } else {
    // fallback: append
    text = text + helpers;
  }
}

// gravar arquivo
fs.writeFileSync(lexerFile, text, 'utf8');
console.log('patch aplicado em', lexerFile);
