import { Input } from 'components/input';
import { InputField } from 'components/input-field';

export const AuthorizationLoginField = () => {
  return (
    <InputField
      title='Логин'
      name='login'
      rules={{
        required: true,
        minLength: {
          value: 4,
          message: 'Минимальная длина логина должна быть не менее 4 символов',
        },
      }}
      render={({ field, fieldState }) => (
        <Input
          value={field.value}
          placeholder='Логин'
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};
