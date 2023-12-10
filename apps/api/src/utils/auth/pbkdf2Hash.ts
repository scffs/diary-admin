import { pbkdf2 } from 'crypto'

/**
 * Хеширует данные с использованием PBKDF2.
 * @param password - Данные для хеширования (например, пароль).
 * @param salt - Соль для хеширования.
 * @returns Промис, который разрешается строкой с хешем.
 */
export const pbkdf2Hash = async (
  password: string,
  salt: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    pbkdf2(password, salt, 1000, 64, 'sha512', (error, derivedKey) => {
      if (error) {
        return reject(error)
      }

      return resolve(derivedKey.toString('hex'))
    })
  })
}
