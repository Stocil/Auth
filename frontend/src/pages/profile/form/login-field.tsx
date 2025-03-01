import { Input } from 'components/input';
import { InputField } from 'components/input-field';

export const ProfileLoginField = () => {
  return (
    <InputField
      titleSize='h6'
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
          label='Логин'
          value={field.value}
          onChange={field.onChange}
          variant='outlined'
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};
