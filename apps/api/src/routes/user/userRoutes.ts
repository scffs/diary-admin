import Elysia from 'elysia'
import { getAllUsersHandler, getUserByIdHandler } from '@handlers'
import { handleErrors } from '@utils'
import { schema } from './userSchema'

const app = new Elysia()
  .get('/user', getAllUsersHandler, { error: handleErrors })
  .guard(schema, (app) =>
    app.get('/user/:id', getUserByIdHandler, { error: handleErrors }),
  )

export default app
