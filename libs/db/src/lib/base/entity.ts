import { Active, ID, Timestamp } from '@oget/type';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Column } from '../decorator';

/**
 * Commonly used table columns including id, createdAt, updatedAt, deletedAt, and active
 */
export abstract class BaseEntity implements ID, Timestamp, Active {
  /**
   * Primary id column
   */
  @PrimaryGeneratedColumn() id: any;

  /**
   * Create timestamp
   */
  @CreateDateColumn() createdAt: Date;
  /**
   * Update timestamp
   */
  @UpdateDateColumn() updatedAt: Date;

  /**
   * Delete timestamp
   */
  @DeleteDateColumn() deletedAt: Date;

  /**
   * Data status active/passive
   */
  @Column({ type: 'boolean', defaultValue: true }) active: boolean;
}
