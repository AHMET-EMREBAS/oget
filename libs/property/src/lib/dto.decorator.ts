import { Exclude, ExcludeOptions } from 'class-transformer';

export function Dto(options?: ExcludeOptions): ClassDecorator {
  return (t) => {
    Exclude(options)(t);
  };
}
