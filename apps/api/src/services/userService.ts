import { PrismaClient, User as PrismaUser } from '@prisma/client'

const db = new PrismaClient()

export const getAllUsers = async (): Promise<PrismaUser[]> => {
  return db.user.findMany()
}

export const getUserById = async (
  userId: number,
): Promise<PrismaUser | null> => {
  return db.user.findUnique({
    where: {
      id: userId,
    },
  })
}
