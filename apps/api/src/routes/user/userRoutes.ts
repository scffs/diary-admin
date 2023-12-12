import { getAllUsersHandler, getUserByIdHandler } from '@handlers'
import { auth } from '@middlewares'
import Elysia, { t } from 'elysia'
import { userByIdParams } from './userSchema'

const app = new Elysia()
  .onBeforeHandle(auth)
  .get('/user', getAllUsersHandler)
  .get('/user/:id', getUserByIdHandler, {
    params: t.Object(userByIdParams)
  })

export default app
