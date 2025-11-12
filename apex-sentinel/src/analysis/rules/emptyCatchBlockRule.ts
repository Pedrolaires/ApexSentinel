import { ICodeSmellRule, AnalysisContext } from './ICodeSmellRule';
import { AnalysisResult } from '../analysisResult';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';
import { CatchClauseContext, CompilationUnitContext } from 'apex-parser/lib/ApexParser';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

class EmptyCatchVisitor extends AbstractParseTreeVisitor<void> implements ApexParserVisitor<void> {
  public emptyCatches: CatchClauseContext[] = [];

  protected defaultResult(): void { }

  visitCatchClause(ctx: CatchClauseContext): void {
    const block = ctx.block();
    
    if (block && block.childCount === 2) 
      {this.emptyCatches.push(ctx);}
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

export class EmptyCatchBlockRule implements ICodeSmellRule {
  readonly name = 'emptyCatchBlock';

  apply(context: AnalysisContext): AnalysisResult[] {
    const ast = context.ast;
    if (!ast) {
      return [];
    }

    const visitor = new EmptyCatchVisitor();
    visitor.visit(ast);

    return visitor.emptyCatches.map(ctx => {
      return {
        uri: context.uri,
        line: ctx.start.line,
        type: 'EMPTY_CATCH_BLOCK',
        message: 'Bloco try/catch vazio detectado. Considere logar o erro (System.debug) ou removê-lo se for intencional.',
      };
    });
  }
}