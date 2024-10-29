'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface RootLayoutProps {
  children: React.ReactNode;
  session: Session | null;
}

export const Providers = ({ session, children }: RootLayoutProps) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
);
