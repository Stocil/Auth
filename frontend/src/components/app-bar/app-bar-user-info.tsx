import { FC } from 'react';

import { Nullable } from 'types';

import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, TypographyProps } from '@mui/material';

import {
  AppBarUserActionsWrapper,
  AppBarUserInfo,
} from 'components/app-bar/app-bar-styles';
import { Avatar } from 'components/avatar';
import { EllipsisText } from 'components/ellipsis-text';
import { Link } from 'components/link';

import { routesPaths } from 'routes/routes';

type Props = {
  login: string;
  avatar: Nullable<string>;
  onLogout: () => void;
};

const typographyProps: TypographyProps = {
  variant: 'h6',
  color: 'primary',
};

export const AppBarUserActions: FC<Props> = ({ login, avatar, onLogout }) => (
  <AppBarUserActionsWrapper>
    <AppBarUserInfo>
      <EllipsisText
        text={login}
        maxLength={12}
        typographyProps={typographyProps}
      />

      <Link linkTo={routesPaths.profile}>
        <Avatar src={avatar ?? ''} noUrlText={login?.[0]} size={40} />
      </Link>
    </AppBarUserInfo>

    <IconButton onClick={onLogout} edge='start'>
      <LogoutIcon />
    </IconButton>
  </AppBarUserActionsWrapper>
);
