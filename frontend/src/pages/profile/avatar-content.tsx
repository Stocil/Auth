import { FC } from 'react';

import { Nullable } from 'types';

import GoogleIcon from '@mui/icons-material/Google';
import { SxProps, Typography, TypographyProps } from '@mui/material';

import { Avatar } from 'components/avatar';
import { EllipsisText } from 'components/ellipsis-text';
import { GoogleLoginButton } from 'components/google-login-button';
import { HorizontalStack, VerticalStack } from 'components/stack';
import { Tooltip } from 'components/tooltip';

type Props = {
  src: string;
  noUrlText: string;
  gmail: Nullable<string>;
};

const containerSx: SxProps = {
  alignItems: 'start',
  gap: '15px',
};

const googleIconTooltipText = 'Google аккаунт привязан';

const typographyProps: TypographyProps = {
  variant: 'body2',
  color: 'textSecondary',
  fontWeight: 700,
};

export const ProfileAvatarContent: FC<Props> = ({ src, noUrlText, gmail }) => {
  // TODO: Добавить функционал
  const onSuccess = () => {};
  const onError = () => {};

  return (
    <VerticalStack sx={containerSx}>
      <Avatar
        src={src}
        noUrlText={noUrlText}
        size={265}
        textSize='h1'
        borderRadius='20px'
        sx={{ mt: '10px' }}
      />

      {gmail && (
        <HorizontalStack gap='5px'>
          <Tooltip isSuccess title={googleIconTooltipText} placement='top'>
            <GoogleIcon fontSize='small' />
          </Tooltip>

          <EllipsisText
            text={gmail ?? ''}
            maxLength={30}
            typographyProps={typographyProps}
          />
        </HorizontalStack>
      )}

      {!gmail && (
        <HorizontalStack gap='5px'>
          <GoogleLoginButton
            onSuccess={onSuccess}
            onError={onError}
            size='medium'
            shape='square'
          />

          <Typography {...typographyProps}>
            — Привязать Google аккаунт?
          </Typography>
        </HorizontalStack>
      )}
    </VerticalStack>
  );
};
