import antlr4 from 'antlr4';
import { ApexLexer, ApexParser } from 'apex-parser';
import * as ApexParserVisitorModule from 'apex-parser/lib/ApexParserVisitor.js';
const ApexParserVisitor = (ApexParserVisitorModule as any).default || ApexParserVisitorModule;




export class ParserAdapter {
  parse(code: string) {
    try {
      const inputStream = new antlr4.InputStream(code);
      const lexer = new ApexLexer(inputStream as any);
      const tokenStream = new antlr4.CommonTokenStream(lexer);
      const parser = new ApexParser(tokenStream as any);

      const tree = parser.compilationUnit();

      return tree;
    } catch (err) {
      console.error("Erro ao parsear código Apex:", err);
      return null;
    }
  }
}

export class ApexBaseVisitor extends ApexParserVisitor  {
  visit(tree: any) {
    return super.visit(tree);
  }
}

