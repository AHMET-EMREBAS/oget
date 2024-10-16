import { Validation } from './validation';

describe('Validation', () => {
  describe('Smoke', () => {
    it('should smoke', () => {
      expect(Validation({})).toBeTruthy();
    });
  });
});
