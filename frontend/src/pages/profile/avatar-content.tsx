import { FC } from 'react';

import { Nullable } from 'types';

import GoogleIcon from '@mui/icons-material/Google';
import { SxProps } from '@mui/material';

import { Avatar } from 'components/avatar';
import { EllipsisText } from 'components/ellipsis-text';
import { HorizontalStack, VerticalStack } from 'components/stack';
import { Tooltip } from 'components/tooltip';

type Props = {
  src: string;
  noUrlText: string;
  gmail: Nullable<string>;
};

const containerSx: SxProps = {
  alignItems: 'start',
};

const googleIconTooltipText = 'Google аккаунт привязан';

export const ProfileAvatarContent: FC<Props> = ({ src, noUrlText, gmail }) => {
  return (
    <VerticalStack sx={containerSx}>
      <Avatar
        src={src}
        noUrlText={noUrlText}
        size={275}
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
            typographyProps={{
              variant: 'body2',
              color: 'textSecondary',
              fontWeight: 700,
            }}
          />
        </HorizontalStack>
      )}
    </VerticalStack>
  );
};
