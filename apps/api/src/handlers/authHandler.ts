import { ApiResponse, ContextWith } from '../types'
import { authenticateUser } from '@services'

interface Body {
  password: string
  login: string
  id: number
}

export const postAuth = async ({
  body,
  jwt,
  setCookie,
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

  setCookie('auth', await jwt.sign(body), {
    httpOnly: true,
    maxAge: 7 * 86400,
    secure: true
  })

  const verify = await jwt.verify(cookie.auth)
  
  console.debug('verify', verify)
  console.debug('cookie.auth', cookie.auth)
  console.debug('success', success)

  return {
    success,
  }
}
