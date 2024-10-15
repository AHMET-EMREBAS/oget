export type Credential = {
  username: string;
  password: string;
};

export type ID = {
  id: number;
};

export type Active = {
  active: boolean;
};

export type Timestamp = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type Owner<T> = {
  owner: T;
};

export type CreatedBy<T> = {
  createdBy: T;
  updatedBy: T;
};

export type Owners<T> = {
  owners: T;
};
