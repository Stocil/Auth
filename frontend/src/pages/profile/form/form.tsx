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
import { useEditUser } from './hooks';
import { ProfileLoginField } from './login-field';
import { ProfileFormFields } from './type';

export const ProfileForm: FC = () => {
  const { handleSubmit, formState } = useFormContext<ProfileFormFields>();
  const { onEditUser, isLoading } = useEditUser();

  const { dirtyFields, isDirty } = formState;

  return (
    <ProfileUserForm onSubmit={handleSubmit(onEditUser)}>
      <ProfileUserFields>
        <ProfileUserFieldWrapper isDirty={dirtyFields.login}>
          <ProfileLoginField />
        </ProfileUserFieldWrapper>

        <ProfileUserFieldWrapper isDirty={dirtyFields.email}>
          <ProfileEmailField />
        </ProfileUserFieldWrapper>

        <ProfileUserFieldWrapper isDirty={dirtyFields.avatar}>
          <ProfileAvatarField />
        </ProfileUserFieldWrapper>
      </ProfileUserFields>

      <Button
        fullWidth
        color='success'
        type='submit'
        disabled={isLoading || !isDirty}
        isLoading={isLoading}
      >
        Сохранить
      </Button>
    </ProfileUserForm>
  );
};
