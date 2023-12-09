import { PrismaClient } from '@prisma/client'
import { comparePassword } from '@utils'
import { ApiResponse } from '../types'

const prisma = new PrismaClient()

export const authenticateUser = async (
  id: number,
  login: string,
  password: string
): Promise<ApiResponse<string>> => {
  const user = await prisma.user.findUnique({
    where: {
      email: login,
      id
    }
  })

  // FIXME: мб удалить, т.к. на уровне мидлвара мы будем уверены в существовании юзера
  if (!user) {
    return {
      success: false
    }
  }

  const isValidPassword = await comparePassword(
    password,
    user.salt,
    user.password
  )

  if (!isValidPassword) {
    return {
      success: false,
      data: 'Invalid password'
    }
  }

  return {
    success: true,
    data: 'Password'
  }
}
