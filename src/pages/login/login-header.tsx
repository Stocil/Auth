import { FC } from 'react';

import { Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';

type Props = {
  isLogin: boolean;
};

export const LoginHeader: FC<Props> = ({ isLogin }) => {
  return (
    <Typography variant='h4' color={indigo[300]} fontWeight={700}>
      {isLogin ? 'Вход' : 'Регистрация'}
    </Typography>
  );
};
