'use client';

import { ReactNode } from 'react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface RootLayoutProps {
  children: ReactNode;
  session: Session | null;
}

export const Providers = ({ session, children }: RootLayoutProps) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
);
