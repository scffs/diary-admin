import { authenticateUser, isUserExist } from '@services'
import { ApiResponse, ContextWith } from '@types'

interface Body {
	password: string
	login: string
	id: number
}

export const postAuth = async ({
	body,
	jwt,
	set
}: ContextWith<never, Body>): Promise<ApiResponse<string>> => {
	const { login, password, id } = body

	const user = await isUserExist(id, login)

	if (!user) {
		set.status = 'Bad Request'

		return {
			success: false,
			data: 'Bad Request'
		}
	}

	const isAuth = await authenticateUser(user, login, password)

	if (!isAuth || !jwt) {
		set.status = 'Bad Request'

		return {
			success: false
		}
	}

	/**
	 * jwt.sign() будет возвращать одну и ту же куку в течении даты ее жизни
	 *
	 * Если хочется генерировать новую на каждую авторизацию (например), то можно использовать такой код
	 *
	 * setCookie('auth', await jwt.sign(body), {
	 *   httpOnly: true,
	 *   maxAge: 7 * 86400,
	 * })
	 *
	 * @see https://elysiajs.com/plugins/jwt.html#jwt-plugin
	 */
	await jwt.sign(body)

	return {
		success: true
	}
}
