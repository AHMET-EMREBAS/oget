#!/usr/bin/env ts-node

import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';
import { chdir } from 'process';

const libs = readdirSync(join(__dirname, '..', 'libs'));

function moveInLib(lib: string) {
  chdir(join(__dirname, '..', 'libs', lib));
}

for (const lib of libs) {
  moveInLib(lib);
  execSync(
    `compodoc --tsconfig tsconfig.json --output ../../documentation/${lib};`
  );
}
