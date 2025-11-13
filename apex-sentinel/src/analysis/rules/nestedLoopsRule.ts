import { ICodeSmellRule, AnalysisContext } from './ICodeSmellRule';
import { AnalysisResult } from '../analysisResult';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';
import { 
  CompilationUnitContext, 
  ForStatementContext,
  WhileStatementContext,
  DoWhileStatementContext
} from 'apex-parser/lib/ApexParser';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { ParserRuleContext } from 'antlr4ts';


class NestedLoopVisitor extends AbstractParseTreeVisitor<void> implements ApexParserVisitor<void> {
  private currentLoopDepth = 0;
  public violations: { node: ParserRuleContext, depth: number }[] = [];
  constructor(private threshold: number) {
    super();
  }

  protected defaultResult(): void { }

  visitForStatement(ctx: ForStatementContext): void {
    this.enterLoop(ctx);
    this.visitChildren(ctx);
    this.exitLoop();
  }

  visitWhileStatement(ctx: WhileStatementContext): void {
    this.enterLoop(ctx);
    this.visitChildren(ctx);
    this.exitLoop();
  }

  visitDoWhileStatement(ctx: DoWhileStatementContext): void {
    this.enterLoop(ctx);
    this.visitChildren(ctx);
    this.exitLoop();
  }

  private enterLoop(ctx: ParserRuleContext): void {
    this.currentLoopDepth++;
    
    if (this.currentLoopDepth > this.threshold) {
      this.violations.push({ node: ctx, depth: this.currentLoopDepth });
    }
  }

  private exitLoop(): void {
    this.currentLoopDepth--;
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

export class NestedLoopsRule implements ICodeSmellRule {
  readonly name = 'nestedLoops';

  apply(context: AnalysisContext): AnalysisResult[] {
    const ast = context.ast;
    if (!ast) {
      return [];
    }

    const threshold = context.config.maxDepth ?? context.config.threshold ?? 1;

    const visitor = new NestedLoopVisitor(threshold);
    visitor.visit(ast);

    return visitor.violations.map(violation => {
      const bigO = `O(n^${violation.depth})`;
      
      return {
        uri: context.uri,
        line: violation.node.start.line,
        type: 'NESTED_LOOPS',
        message: `Laço aninhado detectado (Profundidade: ${violation.depth}, Complexidade: ${bigO}). Isso pode causar problemas de performance.`,
      };
    });
  }
}