import { ValueTransformer } from 'typeorm';
import { v4 } from 'uuid';

export function UUIDTransformer(): ValueTransformer {
  return {
    to: () => v4(),
    from: (v) => v,
  };
}
