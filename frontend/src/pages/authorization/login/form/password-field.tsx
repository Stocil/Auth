import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';

import { Input } from 'components/input';
import { InputField } from 'components/input-field';

export const AuthorizationPasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputField
      title='Пароль'
      name='password'
      rules={{
        required: true,
        minLength: {
          value: 6,
          message: 'Минимальная длина пароля должна быть 6 символов',
        },
      }}
      render={({ field, fieldState }) => (
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder='Пароль'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='end' onClick={onClick}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  );
};
