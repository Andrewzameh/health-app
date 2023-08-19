import { sveltekit } from "lucia/middleware";
import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

import { dev } from '$app/environment'
const client = new PrismaClient();


export const auth = lucia({
	adapter: prisma(client, {
		user: "authUser",
		key: "authKey",
		session: "authSession"
	}),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	getUserAttributes : (userData) => {
		return {
			// userId: userData.id,
			username: userData.username,
		}
	},
	sessionCookie: {
		expires: false
	}
	// // autoDatabaseCleanup: false, <= removed for now
	// csrfProtection: {
	// 	allowedSubdomains: ["foo"] // allow https://foo.example.com
	// } // can be boolean
	// // generateCustomUserId, <= removed, see `csrfProtection`
	// passwordHash, // previously `hash`
	// // origin, <= removed
	// sessionCookie: {
	// 	name: "user_session", // session cookie name
	// 	attributes: {
	// 		// moved previous `sessionCookie` value here
	// 		sameSite: "strict"
	// 	}
	// },
	// sessionExpiresIn // no change
});
export type Auth = typeof auth
