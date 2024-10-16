import { INestApplicationContext, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { getDataSourceToken, provideDataSource } from './provider';

@Module({
  imports: [],
  providers: [
    provideDataSource({
      type: 'postgres',
      database: '',
      username: '',
      password: '',
    }),
  ],
})
class SampleModule {}

describe('DataSourceProvider', () => {
  let context: INestApplicationContext;
  beforeAll(async () => {
    context = await NestFactory.createApplicationContext(SampleModule);
    context = await context.init();
  });

  it('should inject datasource', () => {
    expect(context.get(getDataSourceToken())).toBeTruthy();
  });
});
