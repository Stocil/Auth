import { FC } from 'react';

import { useFormContext } from 'react-hook-form';

import { Button } from 'components/button';

import {
  ProfileUserFieldWrapper,
  ProfileUserFields,
  ProfileUserForm,
} from '../profile-styles';
import { ProfileAvatarField } from './avatar-field';
import { ProfileEmailField } from './email-field';
import { ProfileLoginField } from './login-field';
import { ProfileFormFields } from './type';

export const ProfileForm: FC = () => {
  const { handleSubmit } = useFormContext<ProfileFormFields>();

  return (
    <ProfileUserForm onSubmit={handleSubmit(() => {})}>
      <ProfileUserFields>
        <ProfileUserFieldWrapper>
          <ProfileLoginField />
        </ProfileUserFieldWrapper>

        <ProfileUserFieldWrapper>
          <ProfileEmailField />
        </ProfileUserFieldWrapper>

        <ProfileUserFieldWrapper>
          <ProfileAvatarField />
        </ProfileUserFieldWrapper>
      </ProfileUserFields>

      <Button fullWidth color='success' type='submit'>
        Сохранить
      </Button>
    </ProfileUserForm>
  );
};
