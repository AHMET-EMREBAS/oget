import { ColumnOptions } from '@oget/type';
import { ColumnType } from 'typeorm';

export function toColumnType(options: ColumnOptions): ColumnType {
  const { type } = options;
  if (type === 'boolean') {
    return 'boolean';
  } else if (type === 'date') {
    return 'timestamptz';
  } else if (type === 'number') {
    if (options.isInt) {
      return 'integer';
    } else {
      return 'numeric';
    }
  } else if (type === 'object') {
    return 'json';
  } else if (type === 'string') {
    return 'varchar';
  }

  throw new Error(`Invalid column type ${type}`);
}
