import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import {
    CatchClauseContext,
    DoWhileStatementContext,
    ForStatementContext,
    IfStatementContext,
    WhileStatementContext,
    WhenControlContext,
    CondExpressionContext, // ?:
    LogAndExpressionContext, // &&
    LogOrExpressionContext, // ||
} from 'apex-parser/lib/ApexParser';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';

class CCVisitor extends AbstractParseTreeVisitor<number> implements ApexParserVisitor<number> {
  protected defaultResult(): number {
    return 0;
  }

  protected aggregateResult(aggregate: number, nextResult: number): number {
    return aggregate + nextResult;
  }

  public visitChildren(node: RuleNode): number {
      let result = this.defaultResult();
      const n = node.childCount;
      for (let i = 0; i < n; i++) {
          const child = node.getChild(i);
          if (child instanceof RuleNode) {
              const childResult = this.visit(child);
              result = this.aggregateResult(result, childResult);
          }
      }
      return result;
  }

  public visitIfStatement(ctx: IfStatementContext): number {
    return 1 + this.visitChildren(ctx);
  }

  public visitForStatement(ctx: ForStatementContext): number {
    return 1 + this.visitChildren(ctx);
  }

  public visitWhileStatement(ctx: WhileStatementContext): number {
    return 1 + this.visitChildren(ctx);
  }

  public visitDoWhileStatement(ctx: DoWhileStatementContext): number {
      return 1 + this.visitChildren(ctx);
  }

  public visitCatchClause(ctx: CatchClauseContext): number {
    return 1 + this.visitChildren(ctx);
  }

  public visitWhenControl(ctx: WhenControlContext): number {
    return 1 + this.visitChildren(ctx);
  }

  public visitLogAndExpression(ctx: LogAndExpressionContext): number {
      return 1 + this.visitChildren(ctx);
  }

  public visitLogOrExpression(ctx: LogOrExpressionContext): number {
      return 1 + this.visitChildren(ctx);
  }

  public visitCondExpression(ctx: CondExpressionContext): number {
      return 1 + this.visitChildren(ctx);
  }
}

export class CyclomaticComplexityCalculator {
  private static visitor = new CCVisitor();

  public static calculate(node: RuleNode | undefined): number {
    if (!node) {
      return 1; 
    }
    return 1 + this.visitor.visit(node);
  }
}