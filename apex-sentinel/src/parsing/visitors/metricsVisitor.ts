import { ASTNode } from './../parseAdapter';

/**
 * MetricVisitor
 * Classe responsável por percorrer a AST e extrair métricas relevantes do código Apex.
 * 
 * Essa implementação inicial coleta:
 * - Número total de métodos
 * - Tamanho (em linhas) de cada método
 * - Número total de linhas da classe
 * 
 * Futuramente, pode ser expandida para calcular:
 * - Complexidade ciclomática
 * - Aprofundamento de aninhamentos
 * - Contagem de instruções
 */

export class MetricVisitor {
  private metrics: Map<string, any> = new Map();

  public visit(ast: ASTNode) {
    if (!ast) {return;}

    // Métricas de classe
    if (ast.type === 'class') {
      const totalLines = ast.endLine - ast.startLine + 1;
      const totalMethods = ast.children ? ast.children.length : 0;

      this.metrics.set('class', {
        name: ast.name,
        totalLines,
        totalMethods
      });
    }

    // Métricas de métodos
    if (ast.children && ast.children.length > 0) {
      const methods = ast.children.map((method) => {
        const lines = method.endLine - method.startLine + 1;
        return {
          name: method.name,
          lines,
          startLine: method.startLine,
          endLine: method.endLine
        };
      });

      this.metrics.set('methods', methods);
    }
  }

  /**
   * Retorna as métricas coletadas
   */
  public getMetrics(): Map<string, any> {
    return this.metrics;
  }
}
