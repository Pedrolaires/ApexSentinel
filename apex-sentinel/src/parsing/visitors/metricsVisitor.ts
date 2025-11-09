import {
  ClassBodyContext,
  ClassBodyDeclarationContext,
  ClassDeclarationContext,
  MethodDeclarationContext,
  FieldDeclarationContext,
  FormalParametersContext,
  FormalParameterListContext,
  BlockContext,
  MemberDeclarationContext
} from 'apex-parser/lib/ApexParser';
import { AtfdCalculatorVisitor } from './../../analysis/metrics/atfdCalculatorVisitor';
import { LCOMCalculator } from './../../analysis/metrics/lcomCalculator';
import { AttributeUsageVisitor } from './../../analysis/metrics/attributeUsageVisitor';
import { CyclomaticComplexityCalculator } from './../../analysis/metrics/cyclomaticComplexityCalculator';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';

class AttributeCollector extends AbstractParseTreeVisitor<void> implements ApexParserVisitor<void> {
  public classAttributes: Set<string> = new Set();
  
  protected defaultResult(): void { return; }

  public visitClassBody(ctx: ClassBodyContext): void {
    this.visitChildren(ctx);
  }

  public visitClassBodyDeclaration(ctx: ClassBodyDeclarationContext): void {
    this.visitChildren(ctx);
  }
  
  public visitMemberDeclaration(ctx: MemberDeclarationContext): void {
    this.visitChildren(ctx);
  }

  public visitFieldDeclaration(ctx: FieldDeclarationContext): void {
    const varDeclarators = ctx.variableDeclarators().variableDeclarator();
    for (const declarator of varDeclarators) {
      const attrName = declarator.id().Identifier()?.symbol.text;
      if (attrName) {
        this.classAttributes.add(attrName);
      }
    }
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

export class MetricVisitor
  extends AbstractParseTreeVisitor<void>
  implements ApexParserVisitor<void>
{
  private metrics: Map<string, any> = new Map();
  private nomCounter: number = 0;
  private noaCounter: number = 0;
  private wmcTotal: number = 0;
  private methodAttributeUsage: Map<string, Set<string>> = new Map();
  private classAttributes: Set<string> = new Set();

  constructor() {
    super();
  }

  protected defaultResult(): void { return; }

  public visitClassDeclaration(ctx: ClassDeclarationContext): void {
    const name = ctx.id().Identifier()?.symbol.text ?? 'UnknownClass';
    const startLine = ctx._start.line;
    const endLine = ctx._stop?.line ?? startLine;

    this.nomCounter = 0;
    this.noaCounter = 0;
    this.wmcTotal = 0;
    this.methodAttributeUsage.clear();
    this.classAttributes.clear();

    const classBody = ctx.classBody();
    if (classBody) {
        const attributeCollector = new AttributeCollector();
        attributeCollector.visit(classBody);
        this.classAttributes = attributeCollector.classAttributes;
        console.log('[LCOM-Debug] Passagem 1 Concluída. Atributos encontrados:', this.classAttributes);

        this.visitChildren(classBody);
        
        const lcom = LCOMCalculator.calculate(this.methodAttributeUsage);
        console.log(`[MetricVisitor] LCOM final calculado para ${name}: ${lcom}`);

        this.metrics.set('class', {
            name,
            startLine,
            endLine,
            nom: this.nomCounter,
            noa: this.noaCounter,
            wmc: this.wmcTotal,
            lcom: lcom
        });
    } else {
        this.metrics.set('class', { name, startLine, endLine, nom: 0, noa: 0, wmc: 0, lcom: 0 });
    }
  }

  public visitFieldDeclaration(ctx: FieldDeclarationContext): void {
    this.noaCounter++;
  }

  public visitMethodDeclaration(ctx: MethodDeclarationContext): void {
    this.nomCounter++;

    const name = ctx.id().Identifier()?.symbol.text ?? 'UnknownMethod';
    const startLine = ctx._start.line;
    const endLine = ctx._stop?.line ?? startLine;
    const lines = endLine - startLine + 1;

    let nop = 0;
    const parametersCtx = ctx.formalParameters();
    const paramListCtx = parametersCtx.formalParameterList();
    if (paramListCtx) {
      const params = paramListCtx.formalParameter();
      nop = params ? params.length : 0;
    }

    const methodBodyNode = ctx.block();

    const cc = CyclomaticComplexityCalculator.calculate(methodBodyNode);
    this.wmcTotal += cc;

    const attributeVisitor = new AttributeUsageVisitor(this.classAttributes);
    if (methodBodyNode) {
      attributeVisitor.visit(methodBodyNode);
    }
    this.methodAttributeUsage.set(name, attributeVisitor.usedAttributes);

    const atfdVisitor = new AtfdCalculatorVisitor(this.classAttributes);
    if (methodBodyNode) {
        atfdVisitor.visit(methodBodyNode);
    }
    const atfd = atfdVisitor.foreignDataAccesses.size;

    const existingMethods = this.metrics.get('methods') || [];
    existingMethods.push({ name, startLine, endLine, lines, nop, cc, atfd });
    this.metrics.set('methods', existingMethods);
  }

  public getMetrics(): Map<string, any> {
    return this.metrics;
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