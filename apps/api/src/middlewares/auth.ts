import { Context } from 'elysia'

/**
 * Посредник для проверки авторизирован ли юзер
 *
 * Есть два метода:
 * 1. Сделать кастомный плагин на основе интанса от Элизии
 * 2. Сделать функцию и добавить ее в 'onBeforeHandle' для нужной группы роутов
 *
 * P.S. Пока используем второй способ.
 */

/** 1.
const auth = new Elysia().onBeforeHandle(async ({ set, cookie, jwt }) => {
  const isOK = await jwt.verify(cookie.auth)
  console.log('isOK', isOK)
  if (!isOK) {
    set.status = 'Unauthorized'
  }
})
*/

const auth = async ({ set, jwt, cookie }: Context) => {
  const isOK = await jwt.verify(cookie.auth)
  console.log('isOK', isOK)
  if (!isOK) {
    set.status = 'Unauthorized'
  }
}

export default auth
