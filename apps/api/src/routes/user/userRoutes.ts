import { getAllUsersHandler, getUserByIdHandler } from '@handlers'
import Elysia, { t } from 'elysia'
import { userByIdParams } from './userSchema'
import auth from '../../middlewares/auth'

const app = new Elysia()
  .onBeforeHandle(auth)
  .get('/user', getAllUsersHandler)
  .get('/user/:id', getUserByIdHandler, {
    params: t.Object(userByIdParams)
  })

export default app
