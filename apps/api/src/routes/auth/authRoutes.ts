import jwt, { JWTOption } from '@elysiajs/jwt'
import { postAuth } from '@handlers'
import { getUserById } from '@services'
import Elysia, { t } from 'elysia'
import { authBody } from './authSchema'

const authConfig: JWTOption<string> = {
  name: 'jwt',
  secret: Bun.env.JWT_SECRET ?? 'secret'
}

const app = new Elysia().use(jwt(authConfig)).post('/auth', postAuth, {
  body: t.Object(authBody),
  // TODO: move to custom plugin (middleware)
  beforeHandle: async (context) => {
    const user = await getUserById(context.body.id)

    if (
      !user ||
      user.id !== context.body.id ||
      user.email !== context.body.login
    ) {
      context.set.status = 400
      return 'Bad request'
    }
  }
})

export default app
