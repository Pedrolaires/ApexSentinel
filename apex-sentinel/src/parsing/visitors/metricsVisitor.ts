// src/parsing/visitors/metricsVisitor.ts

import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ClassDeclarationContext, MethodDeclarationContext } from 'apex-parser/lib/ApexParser';
import { ApexParserVisitor } from 'apex-parser/lib/ApexParserVisitor';

/**
 * MetricVisitor
 * Percorre a Árvore Sintática Abstrata (AST) para coletar métricas de código.
 */
export class MetricVisitor extends AbstractParseTreeVisitor<any> implements ApexParserVisitor<any> {
  private metrics: Map<string, any> = new Map();

  constructor() {
    super();
  }
  
  protected defaultResult() {
    return null;
  }

  // --- MÉTODOS DE VISITAÇÃO ---

  /**
   * Chamado quando o visitor encontra a declaração de uma classe.
   */
  public visitClassDeclaration(ctx: ClassDeclarationContext): any {
    // CORREÇÃO FINAL: Acessando o nome através da regra 'identifier()'.
    const name = ctx.id;
    const startLine = ctx._start.line;
    const endLine = ctx._stop?.line ?? startLine;
    const totalLines = endLine - startLine + 1;

    console.log(`[Visitor] Classe encontrada: ${name} (Linhas: ${startLine}-${endLine})`);
    this.metrics.set('class', { name, startLine, endLine, totalLines });

    return this.visitChildren(ctx);
  }

  /**
   * Chamado quando o visitor encontra a declaração de um método.
   */
  public visitMethodDeclaration(ctx: MethodDeclarationContext): any {
    // CORREÇÃO FINAL: Aplicando o mesmo ajuste para o nome do método.
    const name = ctx.id;
    const startLine = ctx._start.line;
    const endLine = ctx._stop?.line ?? startLine;
    const lines = endLine - startLine + 1;

    console.log(`[Visitor] Método encontrado: ${name} (${lines} linhas)`);
    
    const existingMethods = this.metrics.get('methods') || [];
    existingMethods.push({ name, startLine, endLine, lines });
    this.metrics.set('methods', existingMethods);

    return this.visitChildren(ctx);
  }

  public getMetrics(): Map<string, any> {
    return this.metrics;
  }
}