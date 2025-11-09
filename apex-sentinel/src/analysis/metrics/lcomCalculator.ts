export class LCOMCalculator {
  public static calculate(methodUsage: Map<string, Set<string>>): number {
    console.log('[LCOM-Debug] Calculando LCOM com o seguinte mapa de uso:', methodUsage);
    
    const methods = Array.from(methodUsage.keys());
    if (methods.length < 2) {
      return 0;
    }

    let p = 0;
    let q = 0;

    for (let i = 0; i < methods.length; i++) {
      for (let j = i + 1; j < methods.length; j++) {
        const methodA = methods[i];
        const methodB = methods[j];

        const attrsA = methodUsage.get(methodA)!;
        const attrsB = methodUsage.get(methodB)!;

        const intersection = new Set([...attrsA].filter(attr => attrsB.has(attr)));

        if (intersection.size === 0) {
          q++;
        } else {
          p++;
        }
      }
    }
    
    const lcom = q > p ? q - p : 0;
    console.log(`[LCOM-Debug] Pares que compartilham (P): ${p}, Pares que NÃO compartilham (Q): ${q}. LCOM = ${lcom}`);
    return lcom;
  }
}