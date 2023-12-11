import { authenticateUser } from '@services'
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
  if (typeof body === 'undefined') {
    return {
      success: false,
      data: 'Body is required'
    }
  }

  const { login, password, id } = body

  const { success } = await authenticateUser(id, login, password)

  if (!success || !jwt) {
    set.status = 'Bad Request'

    return {
      success: false,
      data: 'Bad request'
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
    success
  }
}
