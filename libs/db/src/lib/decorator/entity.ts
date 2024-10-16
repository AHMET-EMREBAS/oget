import { EntityOptions, Entity as TypeOrmEntity } from 'typeorm';

/**
 * Database table entity class decorator
 * @param options {@link EntityOptions}
 * @returns
 */
export function Entity(options?: EntityOptions): ClassDecorator {
  return (t) => {
    TypeOrmEntity(options)(t);
  };
}
