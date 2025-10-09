// src/parsing/parserAdapter.ts

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ApexLexer } from 'apex-parser/lib/ApexLexer';
import { ApexParser, CompilationUnitContext } from 'apex-parser/lib/ApexParser';

/**
 * Interface para o resultado do parse.
 */
export interface ParseResult {
  tree: CompilationUnitContext;
  parser: ApexParser;
}

/**
 * ParserAdapter
 * Camada de abstração responsável por converter o código-fonte Apex
 * em uma Árvore Sintática Abstrata (AST) usando o apex-parser (ANTLR).
 */
export class ParserAdapter {
  public parse(code: string): ParseResult | null {
    try {
      // Cria um fluxo de caracteres a partir do código.
      const inputStream = CharStreams.fromString(code);

      // O Lexer transforma o fluxo de caracteres em "tokens" (palavras-chave, identificadores, etc.).
      const lexer = new ApexLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);

      // O Parser usa os tokens para construir a árvore sintática.
      const parser = new ApexParser(tokenStream);

      // Configuração para evitar mensagens de erro no console durante o parse.
      // Podemos tratar os erros de forma mais elegante no futuro.
      parser.removeErrorListeners(); 

      // Ponto de entrada da gramática Apex para iniciar o parse.
      const tree = parser.compilationUnit();

      console.log('[ApexSentinel] Árvore sintática gerada com sucesso.');
      return { tree, parser };

    } catch (error) {
      console.error('[ApexSentinel] Erro crítico durante o parse:', error);
      return null;
    }
  }
}