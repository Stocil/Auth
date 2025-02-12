import { useLogout } from 'hooks/use-logout';

import { useAuthUser } from './hooks';
import { Login } from './login';
import { LogoutInfo } from './logout';

export const Authorization = () => {
  const { isLoginPage, onSubmit, isLoading } = useAuthUser();
  const { isLogin, logout } = useLogout();

  if (isLogin) {
    return <LogoutInfo onLogout={logout} />;
  }

  return (
    <Login
      isLoading={isLoading}
      isLoginPage={isLoginPage}
      onSubmit={onSubmit}
    />
  );
};
