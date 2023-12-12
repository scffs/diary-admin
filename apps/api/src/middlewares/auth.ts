import { ContextWith } from '@types'

/**
 * Посредник для проверки авторизирован ли юзер
 *
 * Есть два метода:
 * 1. Сделать кастомный плагин на основе интанса от Элизии.
 * @see https://elysiajs.com/concept/plugin.html#plugin
 *
 * 2. Сделать функцию и добавить ее в 'onBeforeHandle' для нужной группы роутов
 *
 * P.S. Пока используем второй способ.
 */

export const auth = async ({ set, jwt, cookie }: ContextWith) => {
	if (!jwt || !cookie.auth) {
		set.status = 'Internal Server Error'
		return
	}

	const isCookieValid = await jwt.verify(cookie.auth)

	if (!isCookieValid) {
		set.status = 'Unauthorized'
		return
	}
}
