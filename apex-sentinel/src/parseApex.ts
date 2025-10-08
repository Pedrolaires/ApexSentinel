import { CharStreams, CommonTokenStream } from "antlr4ts";
import { apexLexer } from "./parser/apexLexer";
import { apexParser } from "./parser/apexParser";
import { ParseTree } from "antlr4ts/tree/ParseTree";

export function parseApexCode(code: string): ParseTree {
  const inputStream = CharStreams.fromString(code);
  const lexer = new apexLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new apexParser(tokenStream);

  return parser.compilationUnit();
}
