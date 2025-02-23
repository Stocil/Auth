import { FC } from 'react';

import { Typography } from '@mui/material';
import { Controller, ControllerProps } from 'react-hook-form';

import { InputFieldWrapper } from './input-field-styles';

type Props = ControllerProps & {
  title: string;
};

export const InputField: FC<Props> = ({ title, ...controllerProps }) => {
  return (
    <InputFieldWrapper>
      <Typography variant='body1' color='primary' marginLeft={'14px'}>
        {title}
      </Typography>

      <Controller {...controllerProps} />
    </InputFieldWrapper>
  );
};
