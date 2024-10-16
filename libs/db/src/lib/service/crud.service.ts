import { ID } from '@oget/type';
import { DeepPartial, Repository } from 'typeorm';
import { QueryService } from './query.service';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity.js';
import { UpdateResult } from 'typeorm/browser';

export class CrudService<T extends ID = any> extends QueryService {
  constructor(repo: Repository<T | ID>) {
    super(repo);
  }

  /**
   * Save entity
   * @param entity
   * @returns
   */
  save(entity: DeepPartial<T>) {
    return this.repo.save(entity);
  }

  /**
   * Update entity
   * @param id
   * @param entity
   * @returns
   */
  update(id: number, entity: QueryDeepPartialEntity<T>) {
    return this.repo.update(id, entity);
  }

  /**
   * Delete entity
   * @param id
   * @returns
   */
  delete(id: number) {
    return this.repo.delete(id);
  }
}
