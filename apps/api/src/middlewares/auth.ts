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

const auth = async ({ set, jwt, cookie }: ContextWith<unknown, unknown>) => {
  if (!jwt) {
    set.status = 'Internal Server Error'
    return
  }
  
  const isOK = await jwt.verify(cookie.auth)

  if (!isOK) {
    set.status = 'Unauthorized'
  }
}

export default auth
