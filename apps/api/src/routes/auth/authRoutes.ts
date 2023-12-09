import jwt, { JWTOption } from '@elysiajs/jwt'
import { postAuth } from '@handlers'
import { getUserById } from '@services'
import Elysia, { t } from 'elysia'
import { authBody } from './authSchema'

const authConfig: JWTOption<string> = {
  name: 'jwt',
  secret: Bun.env.JWT_SECRET ?? 'secret',
  exp: '7d'
}

const app = new Elysia().use(jwt(authConfig)).post('/auth', postAuth, {
  body: t.Object(authBody)
})

export default app
