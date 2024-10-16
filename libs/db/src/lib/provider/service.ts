import { DynamicProviderOptions, Inject } from '@oget/common';
import { DataSource } from 'typeorm';
import { getDataSourceToken } from './datasource';
import { AdvanceService, QueryService, ResourceService } from '../service';

export function createServiceProvider<T>(
  service: InstanceType<any>
): DynamicProviderOptions<T> {
  const token: DynamicProviderOptions<T>['token'] = (ref, groupName = '') => {
    return `${groupName}${typeof ref === 'string' ? ref : ref.name}${
      service.name
    }`;
  };

  const inject: DynamicProviderOptions<T>['inject'] = (ref, groupName) => {
    return (t, p, d) => {
      Inject(token(ref, groupName));
    };
  };

  const provide: DynamicProviderOptions<T>['provide'] = (ref, groupName) => {
    return {
      inject: [getDataSourceToken(groupName)],
      provide: token(ref, groupName),
      useFactory(ds: DataSource) {
        return new service(ds.getRepository(ref));
      },
    };
  };

  return {
    token,
    inject,
    provide,
  };
}

export const {
  inject: InjectQueryService,
  provide: provideQueryService,
  token: getQueryServiceToken,
} = createServiceProvider<QueryService>(QueryService);

export const {
  inject: InjectResourceService,
  provide: provideResourceService,
  token: getResourceServiceToken,
} = createServiceProvider<ResourceService>(ResourceService);

export const {
  inject: InjectAdvanceService,
  provide: provideAdvanceService,
  token: getAdvanceServiceToken,
} = createServiceProvider<AdvanceService>(AdvanceService);
