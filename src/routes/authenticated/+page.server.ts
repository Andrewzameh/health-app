import { redirect } from '@sveltejs/kit'

// export async function load({ locals }) {
// 	const { user } = await locals.auth.validateUser()
// 	if (!user) throw redirect(302, '/login')
// 	return { user }
// }

export async function load({ locals }) {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
	const user = session.user;
	if (!user) throw redirect(302, '/login');
	return { user };
}
