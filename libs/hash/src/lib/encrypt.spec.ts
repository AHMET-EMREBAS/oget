import { decrypt, encrypt } from './encrypt';

describe('Encript', () => {
  it('should encrypt and decrypt', () => {
    const encryptedValue = encrypt('Some text');
    expect(encryptedValue).not.toBe('Some text');
    const descryptedValue = decrypt(encryptedValue);
    expect(descryptedValue).toBe('Some text');
  });
});
