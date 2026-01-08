import { FC } from 'react';

import { AvatarProps, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

import { ColoredAvatar } from './avatar-styles';

type Props = AvatarProps & {
  noUrlText: string | undefined;
  size: number;
  textSize?: Variant;
  borderRadius?: string | number;
};

export const Avatar: FC<Props> = ({
  noUrlText,
  size,
  textSize = 'h6',
  borderRadius,
  sx,
  ...props
}) => {
  return (
    <ColoredAvatar
      sx={{ width: size, height: size, borderRadius, ...sx }}
      {...props}
    >
      <Typography variant={textSize}>{noUrlText?.toUpperCase()}</Typography>
    </ColoredAvatar>
  );
};
