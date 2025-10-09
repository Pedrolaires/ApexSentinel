// src/ui/codeActionProvider.ts

import * as vscode from 'vscode';

export class CodeActionProvider implements vscode.CodeActionProvider {

  public provideCodeActions(
    document: vscode.TextDocument, 
    range: vscode.Range, 
    context: vscode.CodeActionContext, 
    token: vscode.CancellationToken
  ): vscode.CodeAction[] | undefined {
    
    // --- LOG DE DEPURAÇÃO 1 ---
    // Este log nos dirá se o VS Code está sequer chamando nosso provedor.
    console.log('[CodeActionProvider] O método provideCodeActions foi acionado.');
    
    // --- LOG DE DEPURAÇÃO 2 ---
    // Este log mostrará a lista de diagnósticos que o provedor recebeu.
    // Se esta lista estiver vazia, a lâmpada não aparecerá.
    console.log('[CodeActionProvider] Diagnósticos recebidos no contexto:', context.diagnostics);

    const actions: vscode.CodeAction[] = [];

    for (const diagnostic of context.diagnostics) {
      
      // --- LOG DE DEPURAÇÃO 3 ---
      // Vamos verificar o código de cada diagnóstico encontrado.
      console.log(`[CodeActionProvider] Verificando diagnóstico com código: ${diagnostic.code}`);

      if (diagnostic.code === 'LONG_METHOD') {
        // --- LOG DE DEPURAÇÃO 4 ---
        // Se encontrarmos o diagnóstico correto, saberemos que a ação deveria ser criada.
        console.log('[CodeActionProvider] Diagnóstico "LONG_METHOD" encontrado! Criando a ação...');
        const learnMoreAction = this.createLearnMoreAction(diagnostic);
        actions.push(learnMoreAction);
      }
    }

    return actions;
  }

  private createLearnMoreAction(diagnostic: vscode.Diagnostic): vscode.CodeAction {
    const action = new vscode.CodeAction('Aprender mais sobre "Método Longo"', vscode.CodeActionKind.QuickFix);
    
    action.command = {
      command: 'apex-sentinel.openRuleDocumentation',
      title: 'Abrir documentação',
      arguments: ['https://refactoring.guru/smells/long-method']
    };

    action.diagnostics = [diagnostic];
    return action;
  }
}