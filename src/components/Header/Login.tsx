'use client';

import { signOut, signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

export const Login = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex gap-6 self-center pr-2">
      {
        session && (
        <Link href="/blog/create" className="hover:text-active">
          <h3>Create article</h3>
        </Link>
        )
      }
      <div>
        {status === 'loading' ? '...Loading' : session && session.user.name}
      </div>
      {
        !session
          ? (
            <button type="button" className="hover:text-active" onClick={() => signIn()}>
              Sign In
            </button>
          )
          : (
            <button type="button" className="hover:text-active" onClick={() => signOut()}>
              Log out
            </button>
          )
      }
    </div>

  );
};
