import { RelationOptions } from '@oget/type';
import { JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

export function Relation(options: RelationOptions): PropertyDecorator {
  return (t, p) => {
    const { type, target } = options;

    if (type === 'owner') {
      ManyToOne(target, (t: any) => t.id, { onDelete: 'CASCADE' })(t, p);
      JoinColumn()(t, p);
    } else if (type === 'owners') {
      ManyToMany(target, (t: any) => t.id, { onDelete: 'CASCADE' })(t, p);
      JoinTable()(t, p);
    } else if (type === 'attr') {
      ManyToOne(target, (t: any) => t.id, { eager: true, cascade: true })(t, p);
      JoinColumn()(t, p);
    } else if (type === 'attrs') {
      ManyToMany(target, (t: any) => t.id, { eager: true, cascade: true })(
        t,
        p
      );
      JoinTable()(t, p);
    } else if (type === 'ref') {
      ManyToOne(target, (t: any) => t.id, { eager: true })(t, p);
      JoinColumn()(t, p);
    } else if (type === 'refs') {
      ManyToMany(target, (t: any) => t.id, { eager: true })(t, p);
      JoinTable()(t, p);
    } else {
      throw new Error(`Invalid relation type ${type}`);
    }
  };
}
