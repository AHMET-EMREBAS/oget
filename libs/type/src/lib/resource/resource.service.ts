import {
  DeleteResponse,
  RelationResponse,
  UpdateResponse,
  RelationParam,
  UnsetRelationParam,
  QueryOptions,
} from '../common';

export interface QueryResource<T = any> {
  find(query: QueryOptions): Promise<T[]>;
  findOneBy(id: number): Promise<T>;
}

export interface CrudResource<T = any> extends QueryResource<T> {
  save(entity: Partial<T>): Promise<T>;
  update(id: number, etnity: Partial<T>): Promise<UpdateResponse<T>>;
  delete(id: number): Promise<DeleteResponse<T>>;
}

export interface AdvanceResource<T = any> extends CrudResource<T> {
  addRelation(params: RelationParam): Promise<RelationResponse<T>>;
  removeRelation(params: RelationParam): Promise<RelationResponse<T>>;
  setRelation(params: RelationParam): Promise<RelationResponse<T>>;
  unsetRelation(params: UnsetRelationParam): Promise<RelationResponse<T>>;
}
