import { assert } from 'console';
import { DataSource } from 'typeorm';

export function testing(): string {
  return 'testing';
}

export async function datasource(entities: InstanceType<any>[]) {
  assert(process.env.VITE_DATABASE);
  assert(process.env.VITE_DATABASE_USERNAME);
  assert(process.env.VITE_DATABASE_PASSWORD);
  return await new DataSource({
    type: 'postgres',
    database: process.env.VITE_DATABASE,
    username: process.env.VITE_DATABASE_USERNAME,
    password: process.env.VITE_DATABASE_PASSWORD,
    entities: [...entities],
    synchronize: true,
    dropSchema: true,
  }).initialize();
}
