import * as vscode from 'vscode';

export class CodeActionProvider implements vscode.CodeActionProvider {

  public provideCodeActions(
    document: vscode.TextDocument, 
    range: vscode.Range, 
    context: vscode.CodeActionContext, 
    token: vscode.CancellationToken
  ): vscode.CodeAction[] | undefined {
    
    console.log('[CodeActionProvider] O método provideCodeActions foi acionado.');
    console.log('[CodeActionProvider] Diagnósticos recebidos no contexto:', context.diagnostics);

    const actions: vscode.CodeAction[] = [];

    for (const diagnostic of context.diagnostics) {
      
      console.log(`[CodeActionProvider] Verificando diagnóstico com código: ${diagnostic.code}`);

      if (diagnostic.code === 'LONG_METHOD') {
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