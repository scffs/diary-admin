import { afterAll, describe, expect, it } from 'bun:test'
import { PrismaClient } from '@prisma/client'
import { getAllUsers, getUserById } from '@services'
import { getRandomID } from '@utils'

const testDb = new PrismaClient()

describe('userService', () => {
  afterAll(async () => {
    await testDb.$disconnect()
  })

  it('getAllUsers should return an array of users', async () => {
    await testDb.user.createMany({
      data: [
        {
          id: getRandomID(),
          name: 'User 1',
          password: 'password',
          salt: 'salt',
          email: 'testuser1@example.com'
        },
        {
          id: getRandomID(),
          name: 'User 2',
          password: 'password',
          salt: 'salt',
          email: 'testuser2@example.com'
        }
      ],
      skipDuplicates: true
    })

    const users = await getAllUsers()
    expect(users).toHaveLength(2)
    expect(users[0].name).toBe('User 1')
    expect(users[1].name).toBe('User 2')
  })

  it('getUserById should return a user by ID', async () => {
    const id = getRandomID()

    await testDb.user.create({
      data: {
        id: id,
        name: 'Test User',
        email: 'testuser3@example.com',
        password: 'password',
        salt: 'salt'
      }
    })

    const user = await getUserById(id)
    expect(user).not.toBeNull()
    expect(user?.name).toBe('Test User')
  })
})
