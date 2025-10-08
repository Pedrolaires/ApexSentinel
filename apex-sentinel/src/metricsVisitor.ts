import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { MethodDeclarationContext, ClassDeclarationContext } from "./parser/apexParser";

/**
 * Estrutura simples para métricas
 */
export interface Metrics {
  WMC: number;   // Weighted Methods per Class
  LOC: number;   // Lines of Code
  NOM: number;   // Number of Methods
  NOA: number;   // Number of Attributes
  LCOM: number;  // Lack of Cohesion of Methods
}

/**
 * Visitor customizado para calcular métricas
 */
export class MetricsVisitor extends AbstractParseTreeVisitor<void> {
  private metrics: Metrics = {
    WMC: 0,
    LOC: 0,
    NOM: 0,
    NOA: 0,
    LCOM: 0,
  };

  protected defaultResult(): void {
    return;
  }

  // visita classe
  public visitClassDeclaration(ctx: ClassDeclarationContext): void {
    // você pode capturar o nome da classe aqui se precisar:
    // console.log("Classe:", ctx.id()?.text ?? ctx.Identifier()?.text);
    this.visitChildren(ctx);
  }

  // visita métodos
  public visitMethodDeclaration(ctx: MethodDeclarationContext): void {
    this.metrics.NOM += 1;
    this.metrics.WMC += 1; // simplificado: +1 por método

    // LOC estimado pelo intervalo de linhas
    const startLine = ctx.start?.line ?? 0;
    const endLine = ctx.stop?.line ?? startLine;
    this.metrics.LOC += Math.max(0, endLine - startLine + 1);

    this.visitChildren(ctx);
  }

  // fallback para fields/atributos (nome pode variar dependendo da gramática Apex usada)
  public visitChildren(node: any): void {
    if (node.children) {
      for (const child of node.children) {
        if (child.constructor?.name === "FieldDeclarationContext") {
          this.metrics.NOA += 1;
        }
        if (child.accept) {
          child.accept(this);
        }
      }
    }
  }

  // cálculo simples de LCOM
  private calculateLCOM(): void {
    this.metrics.LCOM = Math.max(0, this.metrics.NOM - this.metrics.NOA);
  }

  public getMetrics(): Metrics {
    this.calculateLCOM();
    return this.metrics;
  }
}
