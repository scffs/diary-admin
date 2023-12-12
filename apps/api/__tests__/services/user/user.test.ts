import { afterAll, beforeEach, describe, expect, it } from 'bun:test'
import { PrismaClient } from '@prisma/client'
import { getAllUsers, getUserById } from '@services'
import { getRandomID, getTestUser } from '@utils'

const testDb = new PrismaClient()

describe('userService', () => {
	afterAll(async () => {
		await testDb.$disconnect()
	})

	beforeEach(async () => {
		await testDb.user.deleteMany()
	})

	it('getAllUsers should return an array of users', async () => {
		const firstID = getRandomID()
		const secondID = getRandomID()

		await testDb.user.createMany({
			data: [await getTestUser(firstID), await getTestUser(secondID)],
			skipDuplicates: true
		})

		const users = await getAllUsers()
		expect(users).toHaveLength(2)
		expect(users[0].name).toBe(`Test User ${firstID}`)
		expect(users[1].name).toBe(`Test User ${secondID}`)
	})

	it('getUserById should return a user by ID', async () => {
		const id = getRandomID()
		const data = await getTestUser(id)

		await testDb.user.create({
			data
		})

		const user = await getUserById(id)
		expect(user).not.toBeNull()
		expect(user?.name).toBe(`Test User ${id}`)
	})
})
