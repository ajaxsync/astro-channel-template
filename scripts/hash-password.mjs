#!/usr/bin/env node
import { createHash } from 'node:crypto';

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.mjs <password>');
  process.exit(1);
}

const hash = createHash('sha256').update(password).digest('hex');
console.log(hash);
console.log('\nPaste the hash into src/config/access.ts as DRAFT_PASSWORD_HASH');
