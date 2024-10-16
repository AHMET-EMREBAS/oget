import { ViewEntity as TypeOrmViewEntity } from 'typeorm';
import { ViewEntityOptions } from 'typeorm/decorator/options/ViewEntityOptions.js';

/**
 * Database table view-etnity class decoarator
 * @param options {@link ViewEntityOptions}
 * @returns
 */
export function ViewEntity(options: ViewEntityOptions): ClassDecorator {
  return (t) => {
    TypeOrmViewEntity(options)(t);
  };
}
