// src/parsing/visitors/metricsVisitor.ts

// Importa o visitor gerado pelo apex-parser (JS)
const { ApexParserVisitor } = require('apex-parser/lib/ApexParserVisitor.js');

export class MetricVisitor {
  constructor() {
    // Cria uma instância real do visitor base
    this.baseVisitor = new ApexParserVisitor();
    this.metrics = new Map();
  }

  metrics: Map<string, any>;
  baseVisitor: any;

  // ----------- VISIT CLASS DECLARATION -----------
  visitClassDeclaration(ctx: any) {
    const name = ctx?.identifier?.()?.getText?.() ?? 'UnknownClass';
    const startLine = ctx.start?.line ?? 0;
    const endLine = ctx.stop?.line ?? startLine;
    const totalLines = endLine - startLine + 1;

    this.metrics.set('class', { name, startLine, endLine, totalLines });
    return this.baseVisitor.visitChildren?.(ctx);
  }

  // ----------- VISIT METHOD DECLARATION -----------
  visitMethodDeclaration(ctx: any) {
    const name = ctx?.identifier?.()?.getText?.() ?? 'UnknownMethod';
    const startLine = ctx.start?.line ?? 0;
    const endLine = ctx.stop?.line ?? startLine;
    const lines = endLine - startLine + 1;

    const existing = this.metrics.get('methods') || [];
    existing.push({ name, startLine, endLine, lines });
    this.metrics.set('methods', existing);

    return this.baseVisitor.visitChildren?.(ctx);
  }

  // ----------- VISIT ROOT NODE -----------
  visit(tree: any) {
    if (this.baseVisitor.visit) {
      this.baseVisitor.visit(tree);
    }
  }

  // ----------- MÉTRICAS -----------
  getMetrics() {
    return this.metrics;
  }
}
