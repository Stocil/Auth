import { useFormContext } from 'react-hook-form';

import { passwordRules } from 'utils/field-rules';

import { PasswordModalFormInputs } from '../types';
import {
  PasswordModalFormButton,
  PasswordModalFormWrapper,
} from './form-styles';
import { useSubmitNewGoogleAccountPasswordForm } from './hooks';
import { PasswordModalField } from './password-field';

export const PasswordModalForm = () => {
  const { handleSubmit } = useFormContext<PasswordModalFormInputs>();

  const { onSubmit, isLoading } = useSubmitNewGoogleAccountPasswordForm();

  return (
    <PasswordModalFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <PasswordModalField
        title='Пароль'
        name='password'
        rules={passwordRules}
      />

      <PasswordModalField
        title='Повторите пароль'
        name='repeatPassword'
        rules={passwordRules}
      />

      <PasswordModalFormButton
        size='medium'
        type='submit'
        color='success'
        isLoading={isLoading}
        disabled={isLoading}
      >
        Создать аккаунт
      </PasswordModalFormButton>
    </PasswordModalFormWrapper>
  );
};
