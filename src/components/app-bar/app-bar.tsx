import { FC } from 'react';

import {
  AppBar as AppBarMui,
  Link,
  SxProps,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router';

import { Button } from 'components/button';

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
          <Link component={RouterLink} to={routesPaths.main} underline={'none'}>
            Auth
          </Link>
        </Typography>
        <Button onClick={onClick} text={buttonText} sx={sx} />
      </Toolbar>
    </AppBarMui>
  );
};
