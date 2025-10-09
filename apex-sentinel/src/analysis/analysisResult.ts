import * as vscode from 'vscode';

export interface AnalysisResult {
  uri: vscode.Uri;
  line: number;
  type: string;
  message: string; 
}