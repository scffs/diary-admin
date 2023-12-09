import { Context as ElysiaContext } from 'elysia'

/** Стандартизирует ответ API: флаг `success` и данные с кастомным типом T */
export interface ApiResponse<T> {
  success: boolean
  data?: T
}

/** Расширяет контекст Elysia с сильно-типизированным объектом `params` */
export interface ContextWith<T, U>
  extends Omit<ElysiaContext, 'params' | 'body'> {
  params: T
  body?: U
}
