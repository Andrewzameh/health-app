import { fail, redirect } from '@sveltejs/kit'
import { superValidate, setError } from 'sveltekit-superforms/server'

import { auth } from '$lib/server/auth'
import { authSchema } from '$lib/zod/schema'

// if the user exists, redirect authenticated users to the profile page
export async function load({ locals }) {
	// const { session } = await locals.auth.validate()
	const session = await locals.auth.validate();

	// const { session } = await locals.auth.validateUser()

	if (session) throw redirect(302, '/')

	// always return `form` in load and form actions
	const form = await superValidate(null, authSchema)
	return { form }
}

export const actions = {
	async default({ request, locals }) {
		const data = await request.formData()
		const form = await superValidate(data, authSchema)

		if (!form.valid) {
			return fail(400, { form })
		}

		try {
			const key = await auth.useKey(
				'username',
				form.data.username,
				form.data.password
			)
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}, // must be defined!
			})
			locals.auth.setSession(session)
		} catch (error) {
			return setError(form, 'username', 'Invalid credentials')
		}
	},
}
