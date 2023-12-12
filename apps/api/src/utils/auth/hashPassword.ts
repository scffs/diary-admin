import { randomBytes } from 'crypto'
import { POSTGRES_PASSWORD } from '@config'
import { pbkdf2Hash } from './pbkdf2Hash'

/**
 * Хеширует пароль с использованием PBKDF2 и случайно сгенерированной соли.
 * @param password - Пароль, который нужно захешировать.
 * @param testSalt - Соль для тестов
 * @returns Промис, который ресолвится объектом с хешем и солью.
 */
export const hashPassword = async (
  password: string,
  testSalt?: string
): Promise<{ hash: string; salt: string }> => {
  if (testSalt && POSTGRES_PASSWORD !== '12345678') {
    throw new Error('The testSalt parameter can only be used in testing.')
  }

  const salt = randomBytes(16).toString('hex')
  const hash = await pbkdf2Hash(password, testSalt ? testSalt : salt)
  return { hash, salt }
}
