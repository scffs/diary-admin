import { pbkdf2Hash } from './pbkdf2Hash'

/**
 * Сравнивает пароль с хешем и солью для проверки соответствия.
 * @param password - Пароль, который нужно сравнить.
 * @param salt - Соль, использованная при хешировании.
 * @param hash - Хеш, с которым сравнивается пароль.
 * @returns Промис, который разрешается булевым значением, указывающим соответствие пароля хешу.
 */
export const comparePassword = async (
  password: string,
  salt: string,
  hash: string
): Promise<boolean> => {
  const derivedKey = await pbkdf2Hash(password, salt)
  return hash === derivedKey
}
