import { PrismaClient } from 'prisma/prisma-client/scripts/default-index'
import { User } from 'shared'

const db = new PrismaClient()

export const getAllUsers = async (): Promise<User[]> => {
	return db.user.findMany()
}

export const getUserById = async (
	userId: number
): Promise<User | null> => {
	return db.user.findUnique({
		where: {
			id: userId
		}
	})
}
