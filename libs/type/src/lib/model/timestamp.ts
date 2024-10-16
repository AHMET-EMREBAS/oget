export type Timestamp<T = Date> = {
  createdAt: T;
  updatedAt: T;
  deletedAt: T;
};
