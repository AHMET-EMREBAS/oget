import { ObjectLiteral, Repository } from 'typeorm';

export class AdvanceService<T extends ObjectLiteral = any> {
  constructor(protected readonly repo: Repository<T>) {}
}
