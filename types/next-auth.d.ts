import 'next-auth/jwt'
import 'next-auth/providers/google'

declare module 'next-auth/jwt' {
	interface JWT {
		/** The user's role. */
		userRole?: 'admin'
	}
}

declare module 'next-auth' {
	interface Session {
		user?: { id: string }; // Or whatever shape you have
	}
	interface Profile {
		profile?: { verified?: { email_verified: string } }
	}
}
