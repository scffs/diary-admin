import { describe, expect, it } from 'bun:test'
import { hashPassword, pbkdf2Hash } from '@utils'

describe('hashPassword', () => {
  it('should hash password with random salt', async () => {
    const result = await hashPassword('password')
    const expectedHash = await pbkdf2Hash('password', result.salt)

    expect(result.hash).toMatch(expectedHash)
  })
})
