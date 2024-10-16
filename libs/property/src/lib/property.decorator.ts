import { PropertyOptions } from '@oget/type';
import { ApiProperty, ApiPropertyOptions } from './__external';

export function Property(options?: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    ApiProperty(options as ApiPropertyOptions)(t, p);
  };
}
