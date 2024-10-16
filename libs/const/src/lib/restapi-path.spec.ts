import { RestApiPathBuilder } from './restapi-path';

describe('RestApiPath', () => {
  it('should build the rest-api-path', () => {
    const P = new RestApiPathBuilder({
      singular: 'cat',
      plural: 'cats',
      prefix: 'api',
    });

    expect(P.PREFIX).toBe('api');

    expect(P.PLURAL).toBe('api/cats');
    expect(P.SIGNULAR).toBe('api/cat');

    expect(P.ID).toBe('api/cat/:id');

    expect(P.RELATION).toBe('api/cat/:id/:rn/:rid');
    expect(P.UNSET_RELATION).toBe('api/cat/:id/:rn');
    expect(P.relation('other')).toBe('api/cat/:id/other/:rid');
    expect(P.unsetRelation('other')).toBe('api/cat/:id/other');
  });
});
