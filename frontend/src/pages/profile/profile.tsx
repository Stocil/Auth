import { FC, useEffect } from 'react';

import { SxProps, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { getUserInfo } from 'store/user/selectors';

import { UserInfoAvatar } from 'components/app-bar/app-bar-styles';
import { PageWrapper } from 'components/page-wrapper';

import { PageEmptyPage } from './empty-page';
import { ProfileForm } from './form';
import { ProfileFormFields } from './form/type';
import { ProfileContainer } from './profile-styles';

const avatarSx: SxProps = { width: 350, height: 350 };

export const Profile: FC = () => {
  const userData = useSelector(getUserInfo);
  const { avatar, login, email } = userData;

  const defaultValues: ProfileFormFields = {
    login: login,
    email: email,
    avatar: avatar,
  };

  const methods = useForm<ProfileFormFields>({
    defaultValues,
  });

  const { setValue } = methods;

  useEffect(() => {
    if (login && email) {
      setValue('login', login);
      setValue('email', email);
      setValue('avatar', avatar ?? '');
    }
  }, [avatar, login, email]);

  return (
    <PageWrapper
      isLoading={false}
      isEmptySearch={!userData}
      noDataFallback={<PageEmptyPage />}
    >
      <ProfileContainer>
        <UserInfoAvatar sx={avatarSx} src={avatar ?? ''}>
          <Typography variant='h1'>
            {!avatar && login?.[0]?.toUpperCase()}
          </Typography>
        </UserInfoAvatar>

        <FormProvider {...methods}>
          <ProfileForm />
        </FormProvider>
      </ProfileContainer>
    </PageWrapper>
  );
};
