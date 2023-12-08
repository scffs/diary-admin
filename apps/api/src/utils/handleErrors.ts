import { ErrorHandler } from 'elysia'

/**
 Обработка ошибок БД. Возвращает стандартизированный ответ
 в зависимости от кода ошибки, включая описание message и объект ошибки error.
 */
export const handleErrors: ErrorHandler = ({ code, error }) => {
  switch (code) {
    case 'VALIDATION':
      return {
        message: 'Validation error',
        error
      }
    case 'INTERNAL_SERVER_ERROR':
      return {
        message: 'Internal Server Error',
        error
      }
    case 'NOT_FOUND':
      return {
        message: 'Not found',
        error
      }
    default:
      return {
        message: 'Unknown error',
        error
      }
  }
}
