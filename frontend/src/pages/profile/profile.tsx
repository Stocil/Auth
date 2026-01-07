import { FC, useEffect } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { getProfilePreviewAvatar } from 'store/profile/selectors';
import { setProfilePreviewAvatar } from 'store/profile/slice';
import { getUserInfo } from 'store/user/selectors';

import { Avatar } from 'components/avatar';
import { PageWrapper } from 'components/page-wrapper';

import { ProfileAvatarContent } from './avatar-content';
import { PageEmptyPage } from './empty-page';
import { ProfileForm } from './form';
import { ProfileFormFields } from './form/type';
import { ProfileContainer } from './profile-styles';

export const Profile: FC = () => {
  const dispatch = useDispatch();

  const previewAvatar = useSelector(getProfilePreviewAvatar);
  const userData = useSelector(getUserInfo);
  const { avatar, login, email, id, gmail } = userData;

  const defaultValues: ProfileFormFields = {
    login: login,
    email: email,
    avatar: avatar,
  };

  const methods = useForm<ProfileFormFields>({
    defaultValues,
  });

  const { reset } = methods;

  useEffect(() => {
    if (login && email) {
      reset({ login, email, avatar: avatar ?? '' });
    }
  }, [avatar, login, email]);

  // Сбраываем превью аватарки при выходе из профиля
  useEffect(
    () => () => {
      dispatch(setProfilePreviewAvatar());
    },
    [],
  );

  return (
    <PageWrapper isEmptySearch={!id} noDataFallback={<PageEmptyPage />}>
      <ProfileContainer>
        <ProfileAvatarContent
          src={previewAvatar ?? avatar ?? ''}
          noUrlText={login?.[0]}
          gmail={gmail}
        />

        <FormProvider {...methods}>
          <ProfileForm />
        </FormProvider>
      </ProfileContainer>
    </PageWrapper>
  );
};
