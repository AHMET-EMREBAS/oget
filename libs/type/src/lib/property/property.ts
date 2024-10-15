import { CheckOptions } from '../check';
import { ColumnOptions, RelationOptions } from '../db';
import { Icon, InputComponent } from '../ui';

export type PropertyOptions =
  | CheckOptions
  | ColumnOptions
  | RelationOptions
  | {
      name?: string;
      description: string;
      example?: any;
      examples?: any;
      inputType?: InputComponent;
      label?: string;
      prefixText?: string;
      suffixText?: String;
      prefixIcon?: Icon;
      suffixIcon?: Icon;
    };
