import { FC } from 'react';

import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';

import { AppBar } from 'components/app-bar';

import { routesPaths } from 'routes/routes.tsx';

import { deleteLocalStorageToken } from 'utils/token';

import { Container, PageStyled } from './page-styles';

export const Page: FC = () => {
  const navigate = useNavigate();
  const isLogin = false; // TODO: Сделать определение на логин, скорее всего, получать isLogin из стора

  const onClick = () => {
    if (isLogin) {
      deleteLocalStorageToken(); // TODO: Возможно исправить
      return;
    }
    navigate(routesPaths.signIn);
  };

  return (
    <PageStyled>
      <AppBar isLogin={isLogin} onClick={onClick} />

      <Container>
        <Outlet />
      </Container>
    </PageStyled>
  );
};
