import { INestApplicationContext, Module, NestFactory } from '@oget/common';
import {
  getAdvanceServiceToken,
  getQueryServiceToken,
  getResourceServiceToken,
  provideAdvanceService,
  provideQueryService,
  provideResourceService,
} from './service';
import { provideDataSource } from './datasource';
import { AdvanceService, QueryService, ResourceService } from '../service';

class Sample {}

class DataSource {
  getRepository() {}
}

@Module({
  providers: [
    provideDataSource({
      useValue: {
        getRepository() {
          return '';
        },
      } as unknown as DataSource,
    } as any),
    provideQueryService(Sample),
    provideAdvanceService(Sample),
    provideResourceService(Sample),
  ],
})
class AppModule {}
describe('Database Configuration and Service Providers', () => {
  let context: INestApplicationContext;

  beforeAll(async () => {
    context = await NestFactory.createApplicationContext(AppModule);
    context = await context.init();
  });

  it('should inject services', () => {
    expect(context.get(getQueryServiceToken(Sample))).toBeInstanceOf(
      QueryService
    );
    expect(context.get(getAdvanceServiceToken(Sample))).toBeInstanceOf(
      AdvanceService
    );
    expect(context.get(getResourceServiceToken(Sample))).toBeInstanceOf(
      ResourceService
    );
  });
});
