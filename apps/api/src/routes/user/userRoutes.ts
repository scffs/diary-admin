import { getAllUsersHandler, getUserByIdHandler } from '@handlers'
import Elysia, { t } from 'elysia'
import { userByIdParams } from './userSchema'

const app = new Elysia()
  .get('/user', getAllUsersHandler)
  .get('/user/:id', getUserByIdHandler, {
    params: t.Object(userByIdParams)
  })

export default app
