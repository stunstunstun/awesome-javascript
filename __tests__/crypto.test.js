const { encrypt, decrypt } = require('../lib/crypto')

describe('Crypto', () => {
  test('Encrypt and decrypt', async () => {
    const plainText = 'Hello!'
    const encrypted = encrypt(plainText)
    const result = decrypt(encrypted)
    expect(result).toEqual(plainText)
  })
})