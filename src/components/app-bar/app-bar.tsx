import { FC } from 'react';

import HttpsIcon from '@mui/icons-material/Https';
import {
  AppBar as AppBarMui,
  SxProps,
  Toolbar,
  Typography,
} from '@mui/material';

import { Button } from 'components/button';
import { Link } from 'components/link';

import { routesPaths } from 'routes/routes.tsx';

type Props = {
  isLogin: boolean;
  onClick: () => void;
};

const sx: SxProps = {
  padding: '4px 8px',
};

export const AppBar: FC<Props> = ({ isLogin, onClick }) => {
  const buttonText = isLogin ? 'Выйти' : 'Войти';

  return (
    <AppBarMui position='fixed'>
      <Toolbar>
        <Typography variant='h4' fontWeight={700} sx={{ flexGrow: 1 }}>
          <Link linkTo={routesPaths.main}>
            <HttpsIcon color='primary' sx={{ mr: 1 }} />
            Auth
          </Link>
        </Typography>
        <Button onClick={onClick} text={buttonText} sx={sx} />
      </Toolbar>
    </AppBarMui>
  );
};
