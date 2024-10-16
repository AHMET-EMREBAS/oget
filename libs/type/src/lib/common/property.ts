import { Icon } from './icon';

export type PropertyType = 'string' | 'number' | 'boolean' | 'object' | 'date';

export type InputComponent =
  | 'text'
  | 'textarea'
  | 'number'
  | 'select'
  | 'autocomplet'
  | 'chip'
  | 'button-toggle'
  | 'switch'
  | 'radio'
  | 'checkbox'
  | 'checkbox-group'
  | 'slider'
  | 'date'
  | 'datetime';

export type StringFormat =
  | 'email'
  | 'password'
  | 'phone'
  | 'uuid'
  | 'ip4'
  | 'ip6'
  | 'barcode'
  | 'short'
  | 'long';

export type RelationType = 'owner' | 'attribute' | 'reference';

export type PropertyOptions = {
  name?: string;
  relationType?: RelationType;
  type?: PropertyType;
  target?: () => InstanceType<any>;

  isInt?: boolean;
  inputComponent?: InputComponent;

  exclude?: boolean;
  prefixIcon?: Icon;
  suffixIcon?: Icon;

  prefix?: string;
  suffix?: string;

  moreThan?: string;
  lessThan?: string;

  format?: StringFormat;

  required?: boolean;

  isArray?: boolean;
  enumName?: string;
  readOnly?: boolean;
  writeOnly?: boolean;
  example?: any;
  examples?: any[] | Record<string, any>;
  deprecated?: boolean;
  allOf?: InstanceType<any>;
  oneOf?: InstanceType<any>;
  anyOf?: InstanceType<any>;
  not?: InstanceType<any>;
  items?: PropertyOptions;
  description?: string;
  default?: any;
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  enum?: any[];
};
