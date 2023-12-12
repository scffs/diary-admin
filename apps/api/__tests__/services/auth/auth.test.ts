import { afterAll, beforeEach, describe, expect, it } from 'bun:test'
import { PrismaClient } from '@prisma/client'
import { authenticateUser, isUserExist } from '@services'
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
    const user = await isUserExist(1, 'nonexistent@example.com')

    expect(user).toBe(null)
  })

  it('should fail authentication for an invalid password', async () => {
    const id = 1
    const testUser = await getTestUser(id)
    await testDb.user.create({
      data: testUser
    })

    const result = await authenticateUser(
      testUser,
      testUser.email,
      'wrongpassword'
    )
    expect(result).toBe(false)
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
    const result = await authenticateUser(testUser, testUser.email, 'password')
    expect(result).toBe(true)
  })
})
