import { hashPassword } from './auth/hashPassword'

export const getTestUser = async (id: number) => ({
	id,
	name: `Test User ${id}`,
	email: `testUser${id}@example.com`,
	password: await hashPassword('password', 'salt').then((r) => r.hash),
	salt: 'salt'
})
