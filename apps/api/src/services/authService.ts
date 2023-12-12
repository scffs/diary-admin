import { comparePassword } from '@utils'
import { User } from 'shared'

/**
 * authenticateUser проверяет правильность переданных значений и тех, которые хранятся в БД.
 * @param user модель юзера из БД
 * @param login переданный логин (email) юзером
 * @param password переданный пароль (email) юзером (не зашифрованный)
 */
export const authenticateUser = async (
	user: User,
	login: string,
	password: string
): Promise<boolean> => {
	const isValidPassword = await comparePassword(
		password,
		user.salt,
		user.password
	)

	const isValidLogin = login === user.email

	return isValidPassword && isValidLogin
}
