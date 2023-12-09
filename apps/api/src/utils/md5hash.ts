import { createHash } from 'crypto'

/**
 * Генерирует MD5-хеш для заданного текста.
 * @param text - Текст, который нужно захешировать.
 * @returns MD5-хеш введенного текста.
 */
function md5hash(text: string) {
  // Создаем объект хеша MD5, обновляем его текстом и получаем результат в шестнадцатеричном формате.
  return createHash('md5').update(text).digest('hex')
}
