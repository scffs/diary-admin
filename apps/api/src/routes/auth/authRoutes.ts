import { postAuth } from '@handlers'
import { getUserById } from '@services'
import Elysia, { t } from 'elysia'
import { authBody } from './authSchema'

const app = new Elysia().post('/auth', postAuth, {
  body: t.Object(authBody),
  // TODO: move to custom plugin (middleware)
  beforeHandle: async (context) => {
    const user = await getUserById(context.body.id)

    if (
      !user ||
      user.id !== context.body.id ||
      user.login !== context.body.login
    ) {
      context.set.status = 400
      return 'Bad request'
    }
  }
})

export default app
