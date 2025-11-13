import * as vscode from 'vscode';

export class CodeActionProvider implements vscode.CodeActionProvider {

  private static ruleDocumentationLinks: Map<string, { title: string, url: string }> = new Map([
    ['LONG_METHOD', {
      title: 'Aprender mais sobre "Método Longo"',
      url: 'https://refactoring.guru/smells/long-method'
    }],
    ['GOD_CLASS', {
      title: 'Aprender mais sobre "God Class"',
      url: 'https://refactoring.guru/smells/large-class'
    }],
    ['FEATURE_ENVY', {
      title: 'Aprender mais sobre "Feature Envy"',
      url: 'https://refactoring.guru/smells/feature-envy'
    }],
    ['NESTED_LOOPS', {
      title: 'Aprender mais sobre (Refactoring Guru: Long Method)',
      url: 'https://refactoring.guru/smells/long-method'
    }]
  ]);

  public provideCodeActions(
    document: vscode.TextDocument, 
    range: vscode.Range, 
    context: vscode.CodeActionContext, 
    token: vscode.CancellationToken
  ): vscode.CodeAction[] | undefined {
    
    const actions: vscode.CodeAction[] = [];

    for (const diagnostic of context.diagnostics) {
      const diagnosticCode = diagnostic.code as string;
      
      if (diagnosticCode && CodeActionProvider.ruleDocumentationLinks.has(diagnosticCode)) {
        const { title, url } = CodeActionProvider.ruleDocumentationLinks.get(diagnosticCode)!;
        const learnMoreAction = this.createLearnMoreAction(diagnostic, title, url);
        actions.push(learnMoreAction);
      }
    }

    return actions;
  }

  private createLearnMoreAction(diagnostic: vscode.Diagnostic, title: string, url: string): vscode.CodeAction {
    const action = new vscode.CodeAction(title, vscode.CodeActionKind.QuickFix);
    
    action.command = {
      command: 'apex-sentinel.openRuleDocumentation',
      title: 'Abrir documentação da regra',
      arguments: [url]
    };

    action.diagnostics = [diagnostic];
    return action;
  }
}