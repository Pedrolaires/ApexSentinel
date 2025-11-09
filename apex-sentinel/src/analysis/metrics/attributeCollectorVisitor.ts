import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import {
  FieldDeclarationContext,
  VariableDeclaratorContext,
  ClassBodyContext
} from 'apex-parser/lib/ApexParser';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';

export class AttributeCollectorVisitor
  extends AbstractParseTreeVisitor<void>
  implements ApexParserVisitor<void>
{
  public classAttributes: Set<string> = new Set();

  protected defaultResult(): void {}

  public visitFieldDeclaration(ctx: FieldDeclarationContext): void {
    const declarators =
      ctx.variableDeclarators?.().variableDeclarator?.() ?? [];

    for (const dec of declarators) {
      try {
        const id = dec.id()?.Identifier()?.symbol.text;
        if (id) {
          this.classAttributes.add(id);
          console.log(`[LCOM] Atributo detectado: ${id}`);
        }
      } catch (err) {
        console.error(`[LCOM] Erro lendo declarator`, err);
      }
    }

    this.visitChildren(ctx);
  }

  public visitChildren(node: RuleNode): void {
    const n = node.childCount;
    for (let i = 0; i < n; i++) {
      const child = node.getChild(i);
      if (child instanceof RuleNode) {this.visit(child);}
    }
  }
}
