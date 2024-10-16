import { CheckOptions } from '../check';
import { Icon, InputComponent } from '../ui';

export type PropertyOptions =
  | CheckOptions
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
