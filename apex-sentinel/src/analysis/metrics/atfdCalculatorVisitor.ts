import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import {
  PrimaryContext,
  DotExpressionContext,
  ThisPrimaryContext
} from 'apex-parser/lib/ApexParser';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';

export class AtfdCalculatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements ApexParserVisitor<void>
{
  public foreignDataAccesses: Set<string> = new Set();

  constructor(private internalAttributes: Set<string>) {
    super();
  }

  protected defaultResult(): void {
    return;
  }

  public visitDotExpression(ctx: DotExpressionContext): void {
    const leftSide = ctx.expression();
    const leftSideText = leftSide.text;

    let isInternalAccess = false;
    
    if (leftSide instanceof PrimaryContext) {
      const primaryChild = leftSide.getChild(0);
      if (primaryChild instanceof ThisPrimaryContext) {
        isInternalAccess = true;
      }
    }

    if (this.internalAttributes.has(leftSideText)) {
      isInternalAccess = true;
    }

    const rightSide = ctx.anyId()?.Identifier()?.symbol.text;

    if (rightSide && !isInternalAccess) {
      const accessSignature = `${leftSideText}.${rightSide}`;
      this.foreignDataAccesses.add(accessSignature);
      console.log(`[ATFD-Debug] Acesso a dado externo detectado: ${accessSignature}`);
    }
    
    this.visitChildren(ctx);
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