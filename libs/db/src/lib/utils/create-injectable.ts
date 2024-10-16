import { Inject, Provider } from '@nestjs/common';

export type ProviderOptions<T> = Partial<Provider<T>>;

export type InjectableResourceOptions<T> = {
  provide: (provider: ProviderOptions<T>, groupName?: string) => Provider<T>;
  token: (groupName?: string) => string;
  inject: (groupName?: string) => ParameterDecorator;
};

/**
 * Create provider, inject, and token handlers
 * @param tokenName
 * @returns
 */
export function createInjectableResource<T>(
  tokenName: string
): InjectableResourceOptions<T> {
  const token = (groupName = '') => `${groupName}${tokenName}`;

  const inject: (groupName?: string) => ParameterDecorator =
    (groupName: string = '') =>
    (t, p, d) =>
      Inject(token(groupName))(t, p, d);

  const provide: (
    provider: ProviderOptions<T>,
    groupName?: string
  ) => Provider<T> = (provider: ProviderOptions<T>, groupName = '') => ({
    provide: token(groupName),
    ...(provider as any),
  });

  return {
    inject,
    provide,
    token,
  };
}
