import { createStaticProvider } from '@oget/common';
import { DataSourceOptions, DataSource } from 'typeorm';

export const {
  inject: InjectDataSourceOptions,
  provide: provideDataSourceOptions,
  token: getDataSourceOptionsToken,
} = createStaticProvider<DataSourceOptions>('DataSourceOptions');

export const {
  inject: InjectDataSource,
  provide: provideDataSource,
  token: getDataSourceToken,
} = createStaticProvider<DataSource>('DataSource');
