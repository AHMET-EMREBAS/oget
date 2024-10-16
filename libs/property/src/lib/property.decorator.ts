import { PropertyOptions } from '@oget/type';
import { ApiProperty, ApiPropertyOptions } from './__external';
import { Validation } from '@oget/validation';
import { Exclude, Expose } from 'class-transformer';

export function Property(options?: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    if (options?.exclude) {
      Exclude()(t, p);
    } else {
      Expose()(t, p);
    }

    ApiProperty(options as ApiPropertyOptions)(t, p);

    Validation(options)(t, p);
  };
}
