import * as path from 'path';
import Mocha from 'mocha';
import { glob } from 'glob';

export function run(): Promise<void> {
  const mocha = new Mocha({
    ui: 'bdd',
    color: true
  });

  const testsRoot = path.resolve(__dirname);

  return new Promise(async (resolve, reject) => {
    try {
      const files: string[] = await glob('**/*.test.js', { cwd: testsRoot });

      files.forEach(file => {
        mocha.addFile(path.resolve(testsRoot, file));
      });

      mocha.run((failures: number) => {
        if (failures > 0) {
          reject(new Error(`${failures} tests failed.`));
        } else {
          resolve();
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}
