// import {
//   QueryResource,
//   CrudResource,
//   AdvanceResource,
//   QueryOptions,
//   DeleteResponse,
//   UpdateResponse,
//   RelationParam,
//   RelationResponse,
//   UnsetRelationParam,
// } from '@oget/type';
import { QueryResource, QueryOptions } from '@oget/type';

import { RestControllerBuilder } from './rest-controller-builder';

export function createQueryController(builder: RestControllerBuilder) {
  const P = builder;

  @P.Controller()
  class QueryController<T> implements QueryResource<T> {
    constructor() {}
    @P.Find()
    find(query: QueryOptions): Promise<T[]> {
      throw new Error('Method not implemented.');
    }

    @P.FindOneById()
    findOneBy(id: number): Promise<T> {
      throw new Error('Method not implemented.');
    }
  }

  return QueryController;
}

// export class CrudController<T>
//   extends QueryController<T>
//   implements CrudResource<T>
// {
//   save(entity: Partial<T>): Promise<T> {
//     throw new Error('Method not implemented.');
//   }
//   update(id: number, etnity: Partial<T>): Promise<UpdateResponse<T>> {
//     throw new Error('Method not implemented.');
//   }
//   delete(id: number): Promise<DeleteResponse<T>> {
//     throw new Error('Method not implemented.');
//   }
// }

// export class AdvanceController<T>
//   extends CrudController<T>
//   implements AdvanceResource<T>
// {
//   addRelation(params: RelationParam): Promise<RelationResponse<T>> {
//     throw new Error('Method not implemented.');
//   }
//   removeRelation(params: RelationParam): Promise<RelationResponse<T>> {
//     throw new Error('Method not implemented.');
//   }
//   setRelation(params: RelationParam): Promise<RelationResponse<T>> {
//     throw new Error('Method not implemented.');
//   }
//   unsetRelation(params: UnsetRelationParam): Promise<RelationResponse<T>> {
//     throw new Error('Method not implemented.');
//   }
// }
