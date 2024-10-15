import { ViewColumn as TypeOrmViewColumn } from 'typeorm';
import { ViewColumnOptions } from 'typeorm/decorator/options/ViewColumnOptions.js';

export function ViewColumn(options: ViewColumnOptions): PropertyDecorator {
  return (t, p) => {
    TypeOrmViewColumn(options)(t, p);
  };
}
