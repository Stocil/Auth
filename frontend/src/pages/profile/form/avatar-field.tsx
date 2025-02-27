import { Input } from 'components/input';
import { InputField } from 'components/input-field';

export const ProfileAvatarField = () => {
  return (
    <InputField
      name='avatar'
      rules={{ required: true }}
      render={({ field }) => (
        <Input
          label='URL ссылка на аватар'
          value={field.value}
          onChange={field.onChange}
          variant='outlined'
          size='medium'
        />
      )}
    />
  );
};
