export interface User {
  id: number
  email: string
  password: string
  salt: string
  name?: string
}
