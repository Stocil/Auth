import { FC } from 'react';

import { SxProps } from '@mui/material';
import { Outlet, useNavigate } from 'react-router';

import { useLogout } from 'hooks/use-logout';

import { AppBar } from 'components/app-bar';
import { Button } from 'components/button';

import { routesPaths } from 'routes/routes';

import { Container, PageStyled } from './page-styles';

const sx: SxProps = {
  padding: '4px 8px',
};

export const Layout: FC = () => {
  const navigate = useNavigate();
  const { isLogin, logout } = useLogout();

  const handleAuthorization = () => {
    if (isLogin) {
      logout();
      return;
    }

    navigate(routesPaths.signIn);
  };

  const buttonText = isLogin ? 'Выйти' : 'Войти';

  return (
    <PageStyled>
      <AppBar>
        <Button onClick={handleAuthorization} text={buttonText} sx={sx} />
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </PageStyled>
  );
};
