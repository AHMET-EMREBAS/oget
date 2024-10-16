import { EntityOptions, Entity as TypeOrmEntity } from 'typeorm';

export function Entity(options?: EntityOptions): ClassDecorator {
  return (t) => {
    TypeOrmEntity(options)(t);
  };
}
