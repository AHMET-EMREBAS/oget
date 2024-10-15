import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';
import { chdir } from 'process';

export const LIBRARIES = readdirSync(join(__dirname, '..', '..', 'libs'));

export function moveIntoLibrary(lib: string) {
  chdir(join(__dirname, '..', '..', 'libs', lib));
}

export function generateCompodoc(lib: string) {
  moveIntoLibrary(lib);
  execSync(`compodoc --tsconfig tsconfig.json --output ../../docs/${lib}`);
}

export function arg(index: number) {
  return process.argv[index];
}
