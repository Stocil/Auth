import { FC, HTMLAttributes } from 'react';

import { Container, PageStyled } from './page-styles';

type Props = HTMLAttributes<HTMLDivElement>;

export const Page: FC<Props> = ({ children }) => {
  return (
    <PageStyled>
      {
        // TODO: Добавить хедер
      }
      <Container>{children}</Container>
    </PageStyled>
  );
};
