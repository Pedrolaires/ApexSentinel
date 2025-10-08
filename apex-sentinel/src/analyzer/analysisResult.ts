export interface Location {
  startLine: number;
  startCol?: number;
  endLine: number;
  endCol?: number;
}

export class AnalysisResult {
  type: string; // ex: 'SMELL_LONG_METHOD'
  location: Location;
  message: string;

  constructor(type: string, location: Location, message: string) {
    this.type = type;
    this.location = location;
    this.message = message;
  }
}
