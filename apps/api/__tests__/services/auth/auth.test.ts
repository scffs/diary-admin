import { afterAll, beforeEach, describe, expect, it } from 'bun:test'
import { PrismaClient } from '@prisma/client'
import { authenticateUser } from '@services'
import { getTestUser } from '@utils'

const testDb = new PrismaClient()

describe('authenticationService', () => {
  afterAll(async () => {
    await testDb.$disconnect()
  })

  beforeEach(async () => {
    await testDb.user.deleteMany()
  })

  it('should fail authentication for a non-existent user', async () => {
    const result = await authenticateUser(
      1,
      'nonexistent@example.com',
      'password'
    )
    expect(result.success).toBe(false)
  })

  it('should fail authentication for an invalid password', async () => {
    const id = 1
    const testUser = await getTestUser(id)
    await testDb.user.create({
      data: testUser
    })

    const result = await authenticateUser(id, testUser.email, 'wrongpassword')
    expect(result.success).toBe(false)
    expect(result.data).toBe('Invalid password')
  })

  it('should authenticate a user with valid credentials', async () => {
    const id = 1
    const testUser = await getTestUser(id)
    await testDb.user.create({
      data: testUser
    })

    /**
     * В getTestUser пароль хешируется, но по задумке authenticateUser мы передаем туда пароль в чистом виде.
     */
    const result = await authenticateUser(id, testUser.email, 'password')
    expect(result.success).toBe(true)
    expect(result.data).toBe('Password')
  })
})
