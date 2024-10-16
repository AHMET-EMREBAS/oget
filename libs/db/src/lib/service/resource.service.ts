import { ObjectLiteral, Repository } from 'typeorm';

export class ResourceService<T extends ObjectLiteral = any> {
  constructor(protected readonly repo: Repository<T>) {}
}
