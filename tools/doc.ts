#!/usr/bin/env ts-node

import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';

const libs = readdirSync(join(__dirname, '..', 'libs'));

for (const lib of libs) {
  execSync(`npx npx @compodoc/compodoc -s=false -p=libs/${lib}/tsconfig.json --name=${lib}`);
}
