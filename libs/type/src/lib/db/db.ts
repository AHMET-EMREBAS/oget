export type RelationType =
  | 'owner'
  | 'owners'
  | 'attr'
  | 'attrs'
  | 'ref'
  | 'refs';

export enum RelationTypeEnum {
  OWNER = 'owner',
  OWNERS = 'owners',
  ATTR = 'attr',
  ATTRS = 'attrs',
  REF = 'ref',
  REFS = 'refs',
}

export type ColumnGeneratedType = 'uuid';

export type CommonColumnOptions = {
  required?: boolean;
  hashed?: boolean;
  encripted?: boolean;
  update?: boolean;
};

export type StringColumnOptions = {
  type: 'string';
  unique?: boolean;
  generated?: ColumnGeneratedType;
  defaultValue?: string;
};

export type NumberColumnOptions = {
  type: 'number';
  isInt?: boolean;
  defaultValue?: number;
};

export type BooleanColumnOptions = {
  type: 'boolean';
  defaultValue?: boolean;
};

export type DateColumnOptions = {
  type: 'date';
  defaultValue?: number;
};

export type ObjectColumnOptions = {
  type: 'object';
  defaultValue?: Record<any, any>;
};

export type ColumnOptions = CommonColumnOptions &
  (
    | StringColumnOptions
    | NumberColumnOptions
    | BooleanColumnOptions
    | DateColumnOptions
    | ObjectColumnOptions
  );

export type RelationOptions = {
  type: RelationType;
  target: () => InstanceType<any>;
};
