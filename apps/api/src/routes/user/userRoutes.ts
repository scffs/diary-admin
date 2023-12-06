import Elysia, { t } from 'elysia'
import { getAllUsersHandler, getUserByIdHandler } from '@handlers'
import { handleErrors } from '@utils'
import { userByIdParams } from './userSchema'

const app = new Elysia()
  .get('/user', getAllUsersHandler, { error: handleErrors })
  .get('/user/:id', getUserByIdHandler, {
    error: handleErrors,
    params: t.Object(userByIdParams),
  })

export default app
