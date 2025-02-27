import { Input } from 'components/input';
import { InputField } from 'components/input-field';

export const ProfileLoginField = () => {
  return (
    <InputField
      // title='Логин'
      titleSize='h6'
      name='login'
      rules={{ required: true }}
      render={({ field }) => (
        <Input
          label='Логин'
          value={field.value}
          onChange={field.onChange}
          variant='outlined'
          size='medium'
        />
      )}
    />
  );
};
