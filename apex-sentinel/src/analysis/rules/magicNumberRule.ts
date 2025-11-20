import { ICodeSmellRule, AnalysisContext } from './ICodeSmellRule';
import { AnalysisResult } from '../analysisResult';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';
import { 
  LiteralContext,
  FieldDeclarationContext
} from 'apex-parser/lib/ApexParser';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';

class MagicNumberVisitor extends AbstractParseTreeVisitor<void> implements ApexParserVisitor<void> {
  public magicNumbers: LiteralContext[] = [];

  protected defaultResult(): void { }

  visitLiteral(ctx: LiteralContext): void {
    const numberNode = ctx.NumberLiteral?.() || ctx.IntegerLiteral?.() || ctx.LongLiteral?.();

    if (numberNode) {
      
      const textValue = numberNode?.text;
      if (textValue !== '0' && textValue !== '1' && textValue !== '-1') {
        
        if (!this.isInsideFieldDeclaration(ctx)) {
          this.magicNumbers.push(ctx);
        }
      }
    }
    
    this.visitChildren(ctx);
  }

private isInsideFieldDeclaration(ctx: ParseTree): boolean {
  let current: ParseTree | undefined = ctx.parent as ParseTree;

  while (current) {
    if (current instanceof FieldDeclarationContext) {
      return true;
    }

    current = current.parent as ParseTree;
  }

  return false;
}


  public visitChildren(node: RuleNode): void {
    const n = node.childCount;
    for (let i = 0; i < n; i++) {
      const child = node.getChild(i);
      if (child instanceof RuleNode) {
        this.visit(child);
      }
    }
  }
}

export class MagicNumberRule implements ICodeSmellRule {
  readonly name = 'magicNumber';

  apply(context: AnalysisContext): AnalysisResult[] {
    const ast = context.ast;
    if (!ast) {
      return [];
    }

    const visitor = new MagicNumberVisitor();
    visitor.visit(ast);

    return visitor.magicNumbers.map(ctx => {
      return {
        uri: context.uri,
        line: ctx.start.line,
        type: 'MAGIC_NUMBER',
        message: `Número Mágico (${ctx.text}) detectado. Considere declarar uma constante (static final) com um nome descritivo.`,
      };
    });
  }
}