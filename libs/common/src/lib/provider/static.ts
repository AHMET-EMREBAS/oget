import { Inject } from '@nestjs/common';
import { ProviderOptions, StaticProviderOptions } from './types';

/**
 * Create provider by groupName
 * @param tokenName
 * @returns
 */
export function createStaticProvider<T>(
  tokenName: string
): StaticProviderOptions<T> {

  const token: StaticProviderOptions<T>['token'] = (groupName = '') =>
    `${groupName}${tokenName}`;

  const inject: StaticProviderOptions<T>['inject'] =
    (groupName: string = '') =>
    (t, p, d) =>
      Inject(token(groupName))(t, p, d);

  const provide: StaticProviderOptions<T>['provide'] = (
    provider: ProviderOptions<T>,
    groupName = ''
  ) => ({
    provide: token(groupName),
    ...(provider as any),
  });

  return {
    inject,
    provide,
    token,
  };
}
