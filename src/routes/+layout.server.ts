// export async function load({ locals }) {
// 	const { user } = await locals.auth.validateUser()
// 	return { user }
// }

export async function load({ locals }) {
	const session = await locals.auth.validate()
	if (session !== null) {
		const user = session.user;
		return { user }
	}
	else{
		return { session }
	}
}