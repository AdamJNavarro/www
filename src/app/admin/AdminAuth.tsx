"use client";

import { signIn, signOut } from "next-auth/react";

const buttonClass =
	"text-white capitalize bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-hidden focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2";

export function AdminSignIn() {
	return (
		<button
			type="button"
			className={buttonClass}
			onClick={() => signIn("github")}
		>
			Sign In with Github
		</button>
	);
}

export function AdminSignOut() {
	return (
		<button type="button" className={buttonClass} onClick={() => signOut()}>
			Sign Out
		</button>
	);
}

export function AuthSignInButton({ provider }: { provider: string }) {
	return (
		<button
			type="button"
			className={buttonClass}
			onClick={() => signIn(provider)}
		>
			{provider}: sign in
		</button>
	);
}
