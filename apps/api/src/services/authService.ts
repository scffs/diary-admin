import { comparePassword } from '@utils'
import { ApiResponse } from '../types'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authenticateUser = async (
  id: number,
  login: string,
  password: string,
): Promise<ApiResponse<string>> => {
  console.log(id)
  console.log(password)
  console.log(login)
  const user = await prisma.user.findUnique({
    where: {
      email: login,
      id
    },
  })
  
  const isValidPassword = await comparePassword(
    password,
    user!.salt,
    user!.password,
  )
  
  if (!isValidPassword) {
    return {
      success: false,
      data: 'Invalid password',
    }
  }
  
  return {
    success: true,
    data: 'Password',
  }
}
