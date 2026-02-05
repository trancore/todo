import nextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    redirect: async ({ baseUrl }) => {
      return baseUrl;
    },
  },
};

export default nextAuth(authOptions);
