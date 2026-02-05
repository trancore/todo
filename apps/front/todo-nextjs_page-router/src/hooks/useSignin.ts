import { useSession } from 'next-auth/react';

export const useSignin = () => {
  const { data: session, status } = useSession();

  const isAuth = status === 'authenticated';

  const getUser = () => {
    return session;
  };

  return { isAuth, getUser };
};
