import { FC } from 'react';

import GoogleIcon from '@mui/icons-material/Google';
import { TypographyProps } from '@mui/material';

import { EllipsisText } from 'components/ellipsis-text';
import { Tooltip } from 'components/tooltip';

type Props = {
  gmail: string;
  typographyProps: TypographyProps;
};

const googleIconTooltipText = 'Google аккаунт привязан';

export const ProfileLinkedGoogleAccountText: FC<Props> = ({
  typographyProps,
  gmail,
}) => {
  return (
    <>
      <Tooltip isSuccess title={googleIconTooltipText} placement='top'>
        <GoogleIcon fontSize='small' />
      </Tooltip>

      <EllipsisText
        text={gmail}
        maxLength={30}
        typographyProps={typographyProps}
      />
    </>
  );
};
