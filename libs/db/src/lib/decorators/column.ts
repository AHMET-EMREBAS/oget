import {
  Column as TypeOrmColumn,
  ColumnOptions as TypeOrmColumnOptions,
} from 'typeorm';
import { ColumnOptions } from '@oget/type';
import { toColumnType } from '../utils';
import { UUIDTransformer } from '../transformer';

export function Column(
  options: ColumnOptions = { type: 'string' }
): PropertyDecorator {
  return (t, p) => {
    const nullable = options.required != true;
    const { type: cType, update, defaultValue } = options;

    const type = toColumnType(options);

    const common: TypeOrmColumnOptions = {
      type,
      nullable,
      update,
      default: defaultValue,
    };

    if (cType === 'string') {
      const { generated } = options;
      if (generated === 'uuid') {
        TypeOrmColumn({
          ...common,
          update: false,
          transformer: UUIDTransformer(),
        })(t, p);
      } else {
        TypeOrmColumn({ type, nullable, update })(t, p);
      }
    } else if (cType === 'number') {
      TypeOrmColumn({ ...common })(t, p);
    } else if (cType === 'boolean') {
      TypeOrmColumn({ ...common })(t, p);
    } else if (cType === 'date') {
      TypeOrmColumn({ ...common })(t, p);
    } else if (cType === 'object') {
      TypeOrmColumn({ ...common })(t, p);
    }

    throw new Error(`Invalid column type ${cType}`);
  };
}
