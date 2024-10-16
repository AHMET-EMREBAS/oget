import { ObjectLiteral, Repository } from 'typeorm';

export class QueryService<T extends ObjectLiteral = any> {
  constructor(protected readonly repo: Repository<T>) {}
}
