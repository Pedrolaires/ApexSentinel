
import * as path from 'path';
import * as fs from 'fs';
import { ParserAdapter } from '../../../parsing/parseAdapter';
import { MetricVisitor } from '../../../parsing/visitors/metricsVisitor';

export function readFixture(relPath: string): string {
  const filePath = path.join(__dirname, '..', 'fixture', relPath);
  return fs.readFileSync(filePath, 'utf8');
}

export function parseApexFromString(code: string) {
  const parser = new ParserAdapter();
  const parsed = parser.parse(code);
  if (!parsed) {
    throw new Error('Falha ao parsear Apex (parseResult é undefined).');
  }
  return parsed.tree;
}

export function getMetricsFromCode(code: string) {
  const tree = parseApexFromString(code);
  const mv = new MetricVisitor();
  mv.visit(tree);
  return mv.getMetrics();
}

export function getMetricsFromFixture(fixtureName: string) {
  const code = readFixture(fixtureName);
  return getMetricsFromCode(code);
}