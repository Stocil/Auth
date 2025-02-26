import { FC } from 'react';

import { SxProps, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { getUserInfo } from 'store/user/selectors';

import { UserInfoAvatar } from 'components/app-bar/app-bar-styles';
import { PageWrapper } from 'components/page-wrapper';
import { HorizontalStack } from 'components/stack';

import { PageEmptyPage } from './empty-page';
import {
  ProfileContainer,
  ProfileUserField,
  ProfileUserFieldDivider,
  ProfileUserInfoWrapper,
} from './profile-styles';

const avatarSx: SxProps = { width: 350, height: 350 };

export const Profile: FC = () => {
  const userData = useSelector(getUserInfo);
  const { avatar, email, login } = userData;

  return (
    <PageWrapper
      isLoading={false}
      isEmptySearch={!userData}
      noDataFallback={<PageEmptyPage />}
    >
      <ProfileContainer>
        <UserInfoAvatar sx={avatarSx} src={avatar ?? ''}>
          <Typography variant='h1'>
            {!avatar && login?.[0].toUpperCase()}
          </Typography>
        </UserInfoAvatar>

        <ProfileUserInfoWrapper>
          <ProfileUserField>
            <HorizontalStack>
              <Typography variant='h4' color='primary'>
                Логин:
              </Typography>

              <Typography variant='h4'>{login}</Typography>
            </HorizontalStack>

            <ProfileUserFieldDivider />
          </ProfileUserField>

          <ProfileUserField>
            <HorizontalStack>
              <Typography variant='h4' color='primary'>
                Email:
              </Typography>

              <Typography variant='h4'>{email}</Typography>
            </HorizontalStack>

            <ProfileUserFieldDivider />
          </ProfileUserField>
        </ProfileUserInfoWrapper>
      </ProfileContainer>
    </PageWrapper>
  );
};
