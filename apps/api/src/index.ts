import cookie from '@elysiajs/cookie'
import { handleErrors } from '@utils'
import Elysia from 'elysia'
import auth from './routes/auth/authRoutes'
import users from './routes/user/userRoutes'

const app = new Elysia()
  .use(cookie())
  .use(users)
  .use(auth)
  .listen(3000)
  .onError(handleErrors)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)
