import { Active, ID, Timestamp } from '@oget/type';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Column } from '../decorators';

/**
 * Abstract entity class with common columns such as ID, Timestamp, and Active
 */
export abstract class BaseEntity implements ID, Timestamp, Active {
  @PrimaryGeneratedColumn() id: any;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt: Date;
  @Column({ type: 'boolean', defaultValue: true }) active: boolean;
}
