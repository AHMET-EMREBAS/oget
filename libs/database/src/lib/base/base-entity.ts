import { ID, Timestamp, Active } from '@oget/type';

export abstract class BaseEntity implements ID, Timestamp, Active {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  active: boolean;
}
