import { TextFieldProps } from '@mui/material';
import { FC } from 'react';

import { StyledInput } from './input-styles';

export type Size = 'small' | 'large';

type Props = TextFieldProps;

export const Input: FC<Props> = (props) => {
  return <StyledInput {...props} fullWidth />;
};
