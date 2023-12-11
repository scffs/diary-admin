import { getAllUsersHandler, getUserByIdHandler } from '@handlers'
import Elysia, { t } from 'elysia'
import { userByIdParams } from './userSchema'
import auth from '../../middlewares/auth'

const app = new Elysia()
  .get('/user', getAllUsersHandler)
  .get('/user/:id', getUserByIdHandler, {
    params: t.Object(userByIdParams)
  })
  .onBeforeHandle(auth)

export default app
