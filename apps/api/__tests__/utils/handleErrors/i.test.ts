// @ts-nocheck В тестах нам не важны лишние параметры для handleErrors
import { describe, expect, it } from 'bun:test'
import { handleErrors } from '@utils'

describe('handleErrors', () => {
  it('should handle VALIDATION error', () => {
    const result = handleErrors({
      code: 'VALIDATION',
      error: new Error('Validation failed')
    })

    expect(result.message).toBe('Validation error')
    expect(result.error).toBeInstanceOf(Error)
  })

  it('should handle INTERNAL_SERVER_ERROR', () => {
    const result = handleErrors({
      code: 'INTERNAL_SERVER_ERROR',
      error: new Error('Server error')
    })

    expect(result.message).toBe('Internal Server Error')
    expect(result.error).toBeInstanceOf(Error)
  })

  it('should handle NOT_FOUND error', () => {
    const result = handleErrors({
      code: 'NOT_FOUND',
      error: new Error('Resource not found')
    })

    expect(result.message).toBe('Not found')
    expect(result.error).toBeInstanceOf(Error)
  })

  it('should handle unknown error', () => {
    const result = handleErrors({
      code: 'UNKNOWN_ERROR',
      error: new Error('Unknown error occurred')
    })

    expect(result.message).toBe('Unknown error')
    expect(result.error).toBeInstanceOf(Error)
  })
})
