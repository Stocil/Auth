import { Input } from 'components/input';
import { InputField } from 'components/input-field';

export const ProfileAvatarField = () => {
  return (
    <InputField
      name='avatar'
      render={({ field }) => (
        <Input
          type='url'
          label='URL ссылка на аватар'
          value={field.value}
          onChange={field.onChange}
          variant='outlined'
        />
      )}
    />
  );
};
