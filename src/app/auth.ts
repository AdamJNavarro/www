import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

const isDev = (process.env.VERCEL_ENV as string) === 'development';

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
  ],
  pages: {
    signIn: '/sign-in',
  },
});
