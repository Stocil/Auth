import { FC } from 'react';

import { Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';

type Props = {
  isLoginPage: boolean;
};

export const LoginHeader: FC<Props> = ({ isLoginPage }) => {
  return (
    <Typography variant='h4' color={indigo[300]} fontWeight={700}>
      {isLoginPage ? 'Вход' : 'Регистрация'}
    </Typography>
  );
};
