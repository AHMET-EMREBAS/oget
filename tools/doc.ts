#!/usr/bin/env ts-node

import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';

const libs = readdirSync(join(__dirname, '..', 'libs'));

for (const lib of libs) {
  execSync(`npx @compodoc/compodoc libs/${lib} -s=false -p=libs/${lib}/tsconfig.json -n=${lib} -d=documentation/${lib}`);
}
// compodoc --tsconfig tsconfig.json --output ../../documentation/type