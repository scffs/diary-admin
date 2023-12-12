import { PrismaClient } from '@prisma/client'
import { User } from 'shared'

const db = new PrismaClient()

export const getAllUsers = async (): Promise<User[]> => {
  return db.user.findMany()
}

export const getUserById = async (id: number): Promise<User | null> => {
  return db.user.findUnique({
    where: {
      id
    }
  })
}

export const isUserExist = async (
  id: number,
  email: string
): Promise<User | null> => {
  return db.user.findUnique({
    where: {
      id,
      email
    }
  })
}
