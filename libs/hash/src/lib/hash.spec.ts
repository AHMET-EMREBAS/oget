import { compare, hash } from './hash';

describe('hash', () => {
  it('should work', () => {
    const hashValue = hash('some');
    expect(hashValue).toBeTruthy();
    expect(compare('some', hashValue)).toBeTruthy();
  });
});
