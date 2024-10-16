import { INestApplicationContext, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  getDataSourceOptionsToken,
  getDataSourceToken,
  provideDataSource,
  provideDataSourceOptions,
} from './provider';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({
  imports: [],
  providers: [
    provideDataSourceOptions({
      useValue: {
        type: 'postgres',
        database: 'database',
        username: 'username',
        password: 'password',
      },
    }),
    provideDataSource({
      inject: [getDataSourceOptionsToken()],
      useFactory(options: DataSourceOptions) {
        return new DataSource(options);
      },
    }),
  ],
})
class SampleModule {}

describe('DataSourceOptions', () => {
  let context: INestApplicationContext;
  let dataSourceOptions: DataSourceOptions;
  let dataSource: DataSource;

  beforeAll(async () => {
    context = await NestFactory.createApplicationContext(SampleModule);
    context = await context.init();
    dataSourceOptions = context.get(getDataSourceOptionsToken());
    dataSource = context.get(getDataSourceToken());
  });

  it('should inject datasource', () => {
    expect(dataSourceOptions).toBeTruthy();
    expect(dataSourceOptions.type).toBeTruthy();
    expect(dataSourceOptions.database).toBeTruthy();
    expect(dataSource).toBeTruthy();
    expect(dataSource).instanceOf(DataSource);
  });
});
