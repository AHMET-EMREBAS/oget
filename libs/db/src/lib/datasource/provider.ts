import { DataSourceOptions } from 'typeorm/browser';
import { createInjectableResource } from '../utils';
import { DataSource } from 'typeorm/browser';

export const {
  inject: InjectDataSourceOptions,
  provide: provideDataSourceOptions,
  token: getDataSourceOptionsToken,
} = createInjectableResource<DataSourceOptions>('DataSourceOptions');

export const {
  inject: InjectDataSource,
  provide: provideDataSource,
  token: getDataSourceToken,
} = createInjectableResource<DataSource>('DataSource');
