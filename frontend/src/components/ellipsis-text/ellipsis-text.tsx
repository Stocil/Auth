import { FC } from 'react';

import { Typography, TypographyProps } from '@mui/material';

import { Tooltip } from 'components/tooltip';

const defaultTypographyProps: TypographyProps = {
  color: 'primary',
};

type Props = {
  text: string;
  maxLength: number;
  typographyProps?: TypographyProps;
};

export const EllipsisText: FC<Props> = ({
  text,
  maxLength,
  typographyProps = defaultTypographyProps,
}) => {
  if (text.length > maxLength) {
    const ellipsedText = `${text.slice(0, maxLength)}...`;

    return (
      <Tooltip title={text} placement='top'>
        <div>
          <Typography {...typographyProps}>{ellipsedText}</Typography>
        </div>
      </Tooltip>
    );
  }

  return <Typography {...typographyProps}>{text}</Typography>;
};
