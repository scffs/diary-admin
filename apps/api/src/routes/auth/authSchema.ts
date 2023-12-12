import { t } from 'elysia'

export const authBody = {
	id: t.Number(),
	password: t.String(),
	login: t.String()
}
