import { ViewEntity as TypeOrmViewEntity } from 'typeorm';
import { ViewEntityOptions } from 'typeorm/decorator/options/ViewEntityOptions.js';

export function ViewEntity(options: ViewEntityOptions): ClassDecorator {
  return (t) => {
    TypeOrmViewEntity(options)(t);
  };
}
