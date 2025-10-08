import { CharStreams } from 'antlr4ts';
import { ApexLexer } from 'apex-parser';
import { ApexParser } from 'apex-parser';
import { CommonTokenStream } from 'antlr4';

export interface ParseResult {
  tree: any;
  parser: ApexParser;
}

/**
 * ParserAdapter
 * Camada responsável por converter o código-fonte Apex em uma estrutura sintática real
 * usando a biblioteca apex-parser (ANTLR4).
 */
export class ParserAdapter {
  public parse(text: string): ParseResult | null {
    try {
      const inputStream = CharStreams.fromString(text);
      const lexer = new ApexLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new ApexParser(tokenStream as any);

      // habilita a construção da árvore de análise
      parser.buildParseTree = true;

      // nó raiz da gramática do Apex (ponto de entrada)
      const tree = parser.compilationUnit();

      console.log('[ApexSentinel][ParserAdapter] Árvore sintática gerada com sucesso.');
      return { tree, parser };
    } catch (error) {
      console.error('[ApexSentinel][ParserAdapter] Erro ao parsear:', error);
      return null;
    }
  }
}
