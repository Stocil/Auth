import { FC } from 'react';

import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { Controller, ControllerProps } from 'react-hook-form';

import { InputFieldWrapper } from './input-field-styles';

type Props = ControllerProps & {
  title?: string;
  titleSize?: Variant;
};

export const InputField: FC<Props> = ({
  title,
  titleSize = 'body1',
  ...controllerProps
}) => {
  return (
    <InputFieldWrapper>
      {title && (
        <Typography variant={titleSize} color='primary' marginLeft={'14px'}>
          {title}
        </Typography>
      )}

      <Controller {...controllerProps} />
    </InputFieldWrapper>
  );
};
