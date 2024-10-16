import { DataSourceOptions } from 'typeorm';
import { Inject, Provider } from '@nestjs/common';

export function getDataSourceToken(connectionName = '') {
  return `${connectionName}DataSource`;
}

export function provideDataSource(
  options: DataSourceOptions,
  connectionName = ''
): Provider {
  return {
    provide: getDataSourceToken(connectionName),
    useValue() {
      return options;
    },
  };
}

export function InjectDataSource(connectionName = ''): ParameterDecorator {
  return (t, p, d) => {
    Inject(getDataSourceToken(connectionName))(t, p, d);
  };
}
