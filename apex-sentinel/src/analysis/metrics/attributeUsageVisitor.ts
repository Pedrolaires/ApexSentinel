import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import {
  IdPrimaryContext,
  DotExpressionContext,
  PrimaryExpressionContext,
  ExpressionContext
} from 'apex-parser/lib/ApexParser';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';

export class AttributeUsageVisitor
  extends AbstractParseTreeVisitor<void>
  implements ApexParserVisitor<void>
{
  public usedAttributes: Set<string> = new Set();

  constructor(private classAttributes: Set<string>) {
    super();
  }

  protected defaultResult(): void {}

  public visitIdPrimary(ctx: IdPrimaryContext): void {
    const text = ctx.text;
    if (this.classAttributes.has(text)) {
      this.usedAttributes.add(text);
      console.log(`[LCOM] Uso detectado (IdPrimary): ${text}`);
    }
    this.visitChildren(ctx);
  }

  public visitDotExpression(ctx: DotExpressionContext): void {
    const full = ctx.text;
    const right = ctx.anyId()?.Identifier()?.symbol.text ?? full.split('.').pop();

    if (right && this.classAttributes.has(right)) {
      this.usedAttributes.add(right);
      console.log(`[LCOM] Uso detectado (DotExpression): ${right}`);
    }

    this.visitChildren(ctx);
  }

  public visitPrimaryExpression(ctx: PrimaryExpressionContext): void {
    const text = ctx.text;
    if (this.classAttributes.has(text)) {
      this.usedAttributes.add(text);
      console.log(`[LCOM] Uso detectado (PrimaryExpression): ${text}`);
    }
    this.visitChildren(ctx);
  }

  public visitExpression(ctx: ExpressionContext): void {
    const parts = ctx.text.split(/[^a-zA-Z0-9_]/);

    for (const token of parts) {
      if (this.classAttributes.has(token)) {
        this.usedAttributes.add(token);
        console.log(`[LCOM] Uso detectado (Expression): ${token}`);
      }
    }

    this.visitChildren(ctx);
  }

  public visitChildren(node: RuleNode): void {
    const n = node.childCount;
    for (let i = 0; i < n; i++) {
      const c = node.getChild(i);
      if (c instanceof RuleNode) {this.visit(c);}
    }
  }
}
