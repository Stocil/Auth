import { FC, PropsWithChildren } from 'react';

import { ButtonProps, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

import { StyledButton } from './button-styles';

type Sizes = 'small' | 'medium' | 'large';

type Props = PropsWithChildren<
  ButtonProps & {
    text?: string;
  }
>;

type SizeOption = {
  buttonPadding: string;
  textVariant: Variant;
};

const buttonSizes: Record<Sizes, SizeOption> = {
  large: {
    buttonPadding: '8px 16px',
    textVariant: 'body1',
  },
  medium: {
    buttonPadding: '6px 12px',
    textVariant: 'body1',
  },
  small: {
    buttonPadding: '4px 8px',
    textVariant: 'body2',
  },
};

export const Button: FC<Props> = ({
  text,
  size = 'medium',
  sx,
  children,
  ...props
}) => {
  const { buttonPadding, textVariant } = buttonSizes[size];

  return (
    <StyledButton
      sx={{ padding: buttonPadding, ...sx }}
      {...props}
      disableRipple
    >
      <Typography variant={textVariant}>{text ?? children}</Typography>
    </StyledButton>
  );
};
