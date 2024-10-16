import { Exclude, ExcludeOptions } from 'class-transformer';

/**
 * Exclude the extra properties form the data transfer object
 * @param options
 * @returns
 */
export function Dto(options?: ExcludeOptions): ClassDecorator {
  return (t) => {
    Exclude(options)(t);
  };
}
