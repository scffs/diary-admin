import { randomBytes } from 'crypto'
import { pbkdf2Hash } from './pbkdf2Hash'

/**
 * Хеширует пароль с использованием PBKDF2 и случайно сгенерированной соли.
 * @param password - Пароль, который нужно захешировать.
 * @returns Промис, который ресолвится объектом с хешем и солью.
 */
export const hashPassword = async (
  password: string
): Promise<{ hash: string; salt: string }> => {
  const salt = randomBytes(16).toString('hex')
  const hash = await pbkdf2Hash(password, salt)
  return { hash, salt }
}
