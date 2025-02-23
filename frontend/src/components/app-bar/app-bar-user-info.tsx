import { FC } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Typography } from '@mui/material';

import {
  AppBarUserActionsWrapper,
  AppBarUserInfo,
  AppBarUserInfoAvatar,
} from 'components/app-bar/app-bar-styles';
import { Link } from 'components/link';

import { routesPaths } from 'routes/routes';

type Props = {
  onLogout: () => void;
  login?: string;
};

export const AppBarUserActions: FC<Props> = ({ onLogout, login }) => {
  return (
    <AppBarUserActionsWrapper>
      <AppBarUserInfo>
        <Typography variant='h6' color='primary'>
          {login}
        </Typography>

        {
          // TODO: Добавить url картинки юзера, после добавления url на БЕ
        }
        <Link linkTo={routesPaths.profile}>
          <AppBarUserInfoAvatar>{login?.[0]}</AppBarUserInfoAvatar>
        </Link>
      </AppBarUserInfo>

      <IconButton onClick={onLogout} edge='start'>
        <LogoutIcon />
      </IconButton>
    </AppBarUserActionsWrapper>
  );
};
