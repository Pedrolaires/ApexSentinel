import { CyclomaticComplexityCalculator } from './../../analysis/metrics/cyclomaticComplexityCalculator';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {
  ClassDeclarationContext,
  MethodDeclarationContext,
  FieldDeclarationContext,
  FormalParametersContext,
  FormalParameterListContext,
  BlockContext
} from 'apex-parser/lib/ApexParser';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

export class MetricVisitor
  extends AbstractParseTreeVisitor<void>
  implements ApexParserVisitor<void>
{
  private metrics: Map<string, any> = new Map();
  private nomCounter: number = 0;
  private noaCounter: number = 0;
  private wmcTotal: number = 0;

  constructor() {
    super();
  }

  protected defaultResult(): void {
    return;
  }

  public visitClassDeclaration(ctx: ClassDeclarationContext): void {
    const name = ctx.id().Identifier()?.symbol.text ?? 'UnknownClass';
    const startLine = ctx._start.line;
    const endLine = ctx._stop?.line ?? startLine;

    this.nomCounter = 0;
    this.noaCounter = 0;
    this.wmcTotal = 0;

    const classBody = ctx.classBody();
    if (classBody) {
        this.visit(classBody);
    }

    this.metrics.set('class', {
      name,
      startLine,
      endLine,
      nom: this.nomCounter,
      noa: this.noaCounter,
      wmc: this.wmcTotal
    });
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

    const blockNode = ctx.block();

    const cc = CyclomaticComplexityCalculator.calculate(blockNode);

    this.wmcTotal += cc;

    const existingMethods = this.metrics.get('methods') || [];
    existingMethods.push({
      name,
      startLine,
      endLine,
      lines,
      nop,
      cc
    });
    this.metrics.set('methods', existingMethods);

    if (blockNode) {
        this.visit(blockNode);
    }
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