import { dbSample } from './db-sample';

describe('dbSample', () => {
  it('should work', () => {
    expect(dbSample()).toEqual('db-sample');
  });
});
