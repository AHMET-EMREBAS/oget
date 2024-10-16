import {
  Column as TypeOrmColumn,
  ColumnOptions as TypeOrmColumnOptions,
} from 'typeorm';
import { ColumnOptions } from '@oget/type';
import { toColumnType } from '../util';
import { UUIDTransformer } from '../transformer';

/**
 * Database table column decorator
 * @param options {@link ColumnOptions} table column options
 * @returns
 */
export function Column(options: ColumnOptions): PropertyDecorator {
  return (t, p) => {
    const { type: cType, update, defaultValue } = options;

    const nullable = options.required != true;

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
      if (options.isInt) {
        TypeOrmColumn({ ...common })(t, p);
      } else {
        TypeOrmColumn({
          ...common,
          precision: 10,
          transformer: {
            to: (v) => v,
            from: (v) => parseFloat(v),
          },
        })(t, p);
      }
    } else if (cType === 'boolean') {
      TypeOrmColumn({ ...common })(t, p);
    } else if (cType === 'date') {
      TypeOrmColumn({ ...common })(t, p);
    } else if (cType === 'object') {
      TypeOrmColumn({ ...common })(t, p);
    } else {
      throw new Error(`Invalid column type ${cType}`);
    }
  };
}
