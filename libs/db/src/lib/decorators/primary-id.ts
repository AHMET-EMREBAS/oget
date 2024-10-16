import { PrimaryGeneratedColumn } from 'typeorm';

export function Primary(): PropertyDecorator {
  return (t, p) => {
    PrimaryGeneratedColumn()(t, p);
  };
}
