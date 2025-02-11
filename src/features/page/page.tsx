import { FC, HTMLAttributes } from 'react';

import { useNavigate } from 'react-router';

import { AppBar } from 'components/app-bar';

import { routesPaths } from 'routes/routes.tsx';

import { Container, PageStyled } from './page-styles';

type Props = HTMLAttributes<HTMLDivElement>;

export const Page: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const isLogin = false; // TODO: Сделать определение логина

  const onClick = () => {
    if (isLogin) {
      // TODO: Сделать logout
      return;
    }
    navigate(routesPaths.signIn);
  };

  return (
    <>
      <AppBar isLogin={isLogin} onClick={onClick} />

      <PageStyled>
        <Container>{children}</Container>
      </PageStyled>
    </>
  );
};
