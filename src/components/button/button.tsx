import { ButtonProps, Typography } from '@mui/material';
import { FC } from 'react';
import { StyledButton } from './button-styles';

type Props = ButtonProps & {
  text: string;
};

export const Button: FC<Props> = ({ text, ...props }) => {
  return (
    <StyledButton {...props} disableRipple>
      <Typography>{text}</Typography>
    </StyledButton>
  );
};
