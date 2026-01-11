import { FC } from 'react';

import { Nullable } from 'types';

import { SxProps, TypographyProps } from '@mui/material';

import { Avatar } from 'components/avatar';
import { HorizontalStack, VerticalStack } from 'components/stack';

import { ProfileLinkGoogleAccount } from './link-google-account';
import { ProfileLinkedGoogleAccountText } from './linked-google-account-text';

type Props = {
  src: string;
  noUrlText: string;
  gmail: Nullable<string>;
};

const containerSx: SxProps = {
  alignItems: 'start',
  gap: '15px',
};

const typographyProps: TypographyProps = {
  variant: 'body2',
  color: 'textSecondary',
  fontWeight: 700,
};

export const ProfileAvatarContent: FC<Props> = ({ src, noUrlText, gmail }) => {
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

      <HorizontalStack gap='5px'>
        {gmail ? (
          <ProfileLinkedGoogleAccountText
            gmail={gmail}
            typographyProps={typographyProps}
          />
        ) : (
          <ProfileLinkGoogleAccount typographyProps={typographyProps} />
        )}
      </HorizontalStack>
    </VerticalStack>
  );
};
