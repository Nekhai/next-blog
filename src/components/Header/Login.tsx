'use client';

import { signOut, signIn, useSession } from 'next-auth/react';

export const Login = () => {
  const { data: session, status } = useSession();

  return (
    <div className="self-center pr-2 hover:text-primary-light">
      {
        !session
          ? <button type="button" onClick={() => signIn()}>Sign In</button>
          : <button type="button" onClick={() => signOut()}>Log out</button>
      }
      <div>
        {status === 'loading' ? '...Loading' : session && session.user.name}
      </div>
    </div>

  );
};
