// src/parsing/parseAdapter.ts
/**
 * ParserAdapter
 * Camada responsável por converter o código-fonte Apex em uma árvore sintática
 * usando o apex-parser oficial (JavaScript runtime do ANTLR4).
 */

import antlr4 from 'antlr4';
import { ApexLexer } from 'apex-parser/lib/ApexLexer';
import { ApexParser } from 'apex-parser/lib/ApexParser';

export class ParserAdapter {
  parse(code: string): any {
    try {
      const inputStream = new antlr4.InputStream(code);
      const lexer = new ApexLexer(inputStream as any);
      const tokenStream = new antlr4.CommonTokenStream(lexer);
      const parser = new ApexParser(tokenStream as any);

      parser.buildParseTree = true;

      const tree = parser.compilationUnit();

      console.log('[ApexSentinel][ParserAdapter] Parse bem-sucedido.');
      return { tree, parser };
    } catch (err) {
      console.error('[ApexSentinel][ParserAdapter] Erro no parse:', err);
      return null;
    }
  }
}
