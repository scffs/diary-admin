import cookie from '@elysiajs/cookie'
import jwt, { JWTOption } from '@elysiajs/jwt'
import { handleErrors } from '@utils'
import Elysia from 'elysia'
import auth from './routes/auth/authRoutes'
import users from './routes/user/userRoutes'

const authConfig: JWTOption<string> = {
  name: 'jwt',
  secret: Bun.env.JWT_SECRET ?? 'secret'
}

const app = new Elysia()
  .use(jwt(authConfig))
  .use(cookie())
  .use(users)
  .use(auth)
  .listen(3000)
  .onError(handleErrors)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)
