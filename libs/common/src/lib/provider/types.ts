import { Provider } from '@nestjs/common';

export type ProviderOptions<T> = Partial<Provider<T>>;

export type StaticProviderOptions<T> = {
  provide: (provider: ProviderOptions<T>, groupName?: string) => Provider<T>;
  token: (groupName?: string) => string;
  inject: (groupName?: string) => ParameterDecorator;
};

export type DynamicProviderOptions<T> = {
  provide: (ref: InstanceType<any>, groupName?: string) => Provider<T>;
  token: (ref: InstanceType<any> | string, groupName?: string) => string;
  inject: (
    ref: InstanceType<any> | string,
    groupName?: string
  ) => ParameterDecorator;
};
