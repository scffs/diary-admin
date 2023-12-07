import { handleErrors } from '@utils'
import Elysia from 'elysia'
import users from './routes/user/userRoutes'

const app = new Elysia().use(users).listen(3000).onError(handleErrors)

console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)
