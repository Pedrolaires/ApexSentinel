import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ApexLexer } from 'apex-parser/lib/ApexLexer';
import { ApexParser, CompilationUnitContext } from 'apex-parser/lib/ApexParser';

export interface ParseResult {
  tree: CompilationUnitContext;
  parser: ApexParser;
}

export class ParserAdapter {
  public parse(code: string): ParseResult | null {
    try {
      const inputStream = CharStreams.fromString(code);

      const lexer = new ApexLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);

      const parser = new ApexParser(tokenStream);

      parser.removeErrorListeners(); 

      const tree = parser.compilationUnit();

      console.log('[ApexSentinel] Árvore sintática gerada com sucesso.');
      return { tree, parser };

    } catch (error) {
      console.error('[ApexSentinel] Erro crítico durante o parse:', error);
      return null;
    }
  }
}