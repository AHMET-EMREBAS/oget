#!/usr/bin/env ts-node

import { generateCompodoc, LIBRARIES } from './common';

LIBRARIES.forEach(generateCompodoc);
