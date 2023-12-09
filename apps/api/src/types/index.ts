import { JWTPayloadSpec } from '@elysiajs/jwt'
import { Context as ElysiaContext } from 'elysia'

/**
 * Стандартизирует ответ API: флаг `success` и данные с кастомным типом T
 * Standardizes the API response: a `success` flag and data with custom type T
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
}

/**
 * Расширяет контекст Elysia с сильно-типизированным объектом `params`
 * Extends the Elysia context with a strongly-typed `params` object
 */
export interface ContextWith<T, U>
  extends Omit<ElysiaContext, 'params' | 'body'> {
  params: T
  body?: U
  /**
   * @warning Необходимо для типизации методов jwt в хендлерах, т.к. Элизия их не передает
   * @warning Necessary for typing jwt methods in handlers since Elysia doesn't pass them
   *
   * @see https://elysiajs.com/plugins/jwt.html#jwt-sign
   * @see https://elysiajs.com/plugins/jwt.html#jwt-verify
   */
  jwt?: {
    sign: (payload: unknown) => Promise<string>
    verify: (payload: unknown) => Promise<JWTPayloadSpec | false>
  }
}




