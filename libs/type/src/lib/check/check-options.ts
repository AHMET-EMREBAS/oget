import { Icon, InputComponent } from '../ui';

export type StringFormat =
  | 'email'
  | 'password'
  | 'phone'
  | 'short'
  | 'long'
  | 'barcode'
  | 'uuid';

export type CommonCheckOptions = {
  isArray?: boolean;
  required?: boolean;
};

export type StringCheckOptions = {
  type: 'string';
  minLength?: number;
  maxLength?: number;
  format?: string;
  enum?: string[];
};

export type NumberCheckOptions = {
  type: 'number';
  minimum?: number;
  maximum?: number;
  isInt?: boolean;
};

export type BooleanCheckOptions = {
  type: 'boolean';
  isString?: boolean;
};

export type DateCheckOptions = {
  type: 'date';
  future?: boolean;
  past?: boolean;
  isString?: boolean;
};

export type ObjectCheckOptions = {
  type: 'object';
  target: () => InstanceType<any>;
  isString?: boolean;
};

export type CheckOptions = CommonCheckOptions &
  (
    | StringCheckOptions
    | NumberCheckOptions
    | BooleanCheckOptions
    | DateCheckOptions
    | ObjectCheckOptions
  );
