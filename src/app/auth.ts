import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

const isDev = (process.env.NODE_ENV as string) === 'development';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET as string,
      redirectProxyUrl: isDev
        ? 'http://localhost:3000/api/auth/callback/github'
        : 'https://adamjnavarro.com/api/auth/callback/github',
    }),
    Google({
      redirectProxyUrl: isDev
        ? 'http://localhost:3000/api/auth/callback/google'
        : 'https://adamjnavarro.com/api/auth/callback/google',
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
});
