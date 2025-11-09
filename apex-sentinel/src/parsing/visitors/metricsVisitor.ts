import {
  ClassDeclarationContext,
  MethodDeclarationContext,
  FieldDeclarationContext
} from 'apex-parser/lib/ApexParser';

import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

import { AttributeCollectorVisitor } from '../../analysis/metrics/attributeCollectorVisitor';
import { AttributeUsageVisitor } from '../../analysis/metrics/attributeUsageVisitor';
import { CyclomaticComplexityCalculator } from '../../analysis/metrics/cyclomaticComplexityCalculator';
import { LCOMCalculator } from '../../analysis/metrics/lcomCalculator';

export class MetricVisitor
  extends AbstractParseTreeVisitor<void>
{
  private metrics: Map<string, any> = new Map();

  private classAttributes = new Set<string>();
  private methodAttributeUsage = new Map<string, Set<string>>();

  private nom = 0;
  private noa = 0;
  private wmc = 0;

  protected defaultResult(): void {}

  public visitClassDeclaration(ctx: ClassDeclarationContext): void {
    this.nom = 0;
    this.noa = 0;
    this.wmc = 0;
    this.methodAttributeUsage.clear();
    this.classAttributes.clear();

    const className = ctx.id().text;

    const collector = new AttributeCollectorVisitor();
    collector.visit(ctx.classBody());
    this.classAttributes = collector.classAttributes;

    console.log(`[LCOM] Atributos encontrados: ${Array.from(this.classAttributes).join(', ')}`);

    this.visitChildren(ctx.classBody());

    const lcom = LCOMCalculator.calculate(this.methodAttributeUsage);

    this.metrics.set('class', {
      name: className,
      nom: this.nom,
      noa: this.noa,
      wmc: this.wmc,
      lcom
    });
  }

  public visitFieldDeclaration(ctx: FieldDeclarationContext): void {
    this.noa++;
    this.visitChildren(ctx);
  }

  public visitMethodDeclaration(ctx: MethodDeclarationContext): void {
    this.nom++;

    const name = ctx.id().text;
    const body = ctx.block();

    const cc = CyclomaticComplexityCalculator.calculate(body);
    this.wmc += cc;

    const usage = new AttributeUsageVisitor(this.classAttributes);
    if (body) {usage.visit(body);}

    this.methodAttributeUsage.set(name, usage.usedAttributes);

    console.log(`[LCOM] Método ${name} usa: ${Array.from(usage.usedAttributes).join(', ')}`);

    this.visitChildren(ctx);
  }

  public getMetrics(): Map<string, any> {
    return this.metrics;
  }

  public visitChildren(node: RuleNode): void {
    const n = node.childCount;
    for (let i = 0; i < n; i++) {
      const c = node.getChild(i);
      if (c instanceof RuleNode) {this.visit(c);}
    }
  }
}
