import NextAuth from 'next-auth';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/lib/prisma';

const OPTIONS = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

const authHandler: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => NextAuth(req, res, OPTIONS);

export { authHandler as GET, authHandler as POST };
