import { getAllUsers, getUserById } from '@services'
import { ApiResponse, ContextWith } from '@types'
import { User } from 'shared'

type Params = { id: string }

export const getAllUsersHandler = async (): Promise<ApiResponse<User[]>> => {
  const users = await getAllUsers()

  return {
    success: true,
    data: users
  }
}

export const getUserByIdHandler = async ({
  params
}: ContextWith<Params, unknown>): Promise<ApiResponse<User | null>> => {
  const userId = parseInt(params.id, 10)
  const user = await getUserById(userId)

  return {
    success: true,
    data: user
  }
}
