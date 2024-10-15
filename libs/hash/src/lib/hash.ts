import { compareSync, genSaltSync, hashSync } from 'bcrypt';

export function hash(value: string): string {
  return hashSync(value, genSaltSync(8));
}

export function compare(value: string, hashedValue: string) {
  return compareSync(value, hashedValue);
}
