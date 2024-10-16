export type RelationType =
  | 'owner'
  | 'owners'
  | 'attr'
  | 'attrs'
  | 'ref'
  | 'refs';

export enum RelationTypeEnum {
  /**
   * - Required
   * - Cascade On Delete
   *
   */
  OWNER = 'owner',

  /**
   * - Required
   * - Cascade On Delete
   *
   */
  OWNERS = 'owners',

  /**
   * - Cascade On Create
   * - Loose
   */
  ATTR = 'attr',

  /**
   * - Cascade On Create
   * - Loose
   */
  ATTRS = 'attrs',

  /**
   * - No Cascade
   */
  REF = 'ref',

  /**
   * - No Cascade
   */
  REFS = 'refs',
}

export type ColumnGeneratedType = 'uuid';

export type CommonColumnOptions = {
  required?: boolean;
  hashed?: boolean;
  encripted?: boolean;

  /**
   * Prevent the value form being updated if set false
   */
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
  target: () => InstanceType<any>;
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
