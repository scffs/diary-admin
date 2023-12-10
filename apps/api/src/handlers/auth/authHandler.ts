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
  set,
  cookie
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

  await jwt.sign(body)

  const verify = await jwt.verify(cookie.auth)

  console.debug('verify', verify)
  console.debug('cookie.auth', cookie.auth)
  console.debug('success', success)

  return {
    success
  }
}
