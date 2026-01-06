import { Input } from 'components/input';
import { InputField } from 'components/input-field';

import { profileDirtyFieldSx } from './constants';

export const ProfileEmailField = () => {
  return (
    <InputField
      titleSize='h6'
      name='email'
      rules={{ required: true }}
      render={({ field, fieldState }) => (
        <Input
          type='email'
          label='Email'
          value={field.value}
          onChange={field.onChange}
          variant='outlined'
          sx={fieldState.isDirty ? profileDirtyFieldSx : undefined}
        />
      )}
    />
  );
};
