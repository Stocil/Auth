import { FC } from 'react';

import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';

import { getUserInfo } from 'store/user/selectors';

import { useLogout } from 'hooks/use-logout';

import { AppBar } from 'components/app-bar';
import { AppBarUserActions } from 'components/app-bar/app-bar-user-info';
import { Button } from 'components/button';

import { routesPaths } from 'routes/routes';

import { Container, PageStyled } from './layout-styles';

export const Layout: FC = () => {
  const navigate = useNavigate();
  const { isLogin, logout } = useLogout();

  const userInfo = useSelector(getUserInfo);

  const navigateToAuthorizationPage = () => {
    navigate(routesPaths.signIn);
  };

  return (
    <PageStyled>
      <AppBar>
        {!isLogin && (
          <Button onClick={navigateToAuthorizationPage} text='Войти' />
        )}

        {isLogin && (
          <AppBarUserActions
            onLogout={logout}
            login={String(userInfo?.login)}
            avatar={userInfo?.avatar}
          />
        )}
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </PageStyled>
  );
};
