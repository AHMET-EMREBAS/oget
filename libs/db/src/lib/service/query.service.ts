import { ID, QueryOptions } from '@oget/type';
import { Repository } from 'typeorm';

export class QueryService<T extends ID = any> {
  constructor(protected readonly repo: Repository<T | ID>) {}

  /**
   * Query entities
   * @param query
   */
  async find(query: QueryOptions) {
    return await this.repo.find(query);
  }

  /**
   * Find entity by id
   * @param id entity id
   */
  async findOneById(id: number) {
    return await this.repo.findOneBy({ id });
  }
}
