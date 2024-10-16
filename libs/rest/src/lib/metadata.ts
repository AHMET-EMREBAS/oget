import { SetMetadata } from '@nestjs/common';
import { MetadataTokens } from '@oget/const';

export function PublicResource(): ClassDecorator {
  return (t: any) => {
    SetMetadata(MetadataTokens.PUBLIC, true)(t);
  };
}

export function PublicMethod(): MethodDecorator {
  return (t: any) => {
    SetMetadata(MetadataTokens.PUBLIC, true)(t);
  };
}

export function OperationName(
  operationName: string
): ClassDecorator | MethodDecorator {
  return (t: any, p: any, d?: any) => {
    SetMetadata(MetadataTokens.OPERATION_NAME, operationName)(t, p, d);
  };
}
