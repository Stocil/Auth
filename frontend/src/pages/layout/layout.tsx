import { FC } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { Outlet, useNavigate } from 'react-router';

import { useLogout } from 'hooks/use-logout';

import { AppBar } from 'components/app-bar';
import { Button } from 'components/button';

import { routesPaths } from 'routes/routes';

import { Container, PageStyled } from './page-styles';

export const Layout: FC = () => {
  const navigate = useNavigate();
  const { isLogin, logout } = useLogout();

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
          <IconButton onClick={logout} edge='start'>
            <LogoutIcon />
          </IconButton>
        )}
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </PageStyled>
  );
};
