import { User } from '@prisma/client'
import { getUserById, getAllUsers } from '../services/userService'
import { ApiResponse, ContextWith } from '../types'

type Params = { id: string }

export const getAllUsersHandler = async (): Promise<ApiResponse<User[]>> => {
  const users = await getAllUsers()

  return {
    success: true,
    data: users,
  }
}

export const getUserByIdHandler = async ({
  params,
}: ContextWith<Params>): Promise<ApiResponse<User | null>> => {
  const userId = parseInt(params.id, 10)
  const user = await getUserById(userId)

  return {
    success: true,
    data: user,
  }
}
