export type StringFormat = string;

export type CommonCheckOptions = {
  isArray?: boolean;
  required?: boolean;
};

export type StringCheckOptions = {
  type: 'string';
  minLength?: number;
  maxLength?: number;
  format?: string;
};

export type NumberCheckOptions = {
  type: 'number';
  minimum?: number;
  maximum?: number;
  isInt?: boolean;
};

export type BooleanCheckOptions = {
  type: 'boolean';
};
export type DateCheckOptions = {
  type: 'date';
  future?: boolean;
  past?: boolean;
};

export type ObjectCheckOptions = {
  type: 'object';
  target: () => InstanceType<any>;
};

export type CheckOptions = CommonCheckOptions &
  (
    | StringCheckOptions
    | NumberCheckOptions
    | BooleanCheckOptions
    | DateCheckOptions
    | ObjectCheckOptions
  );
