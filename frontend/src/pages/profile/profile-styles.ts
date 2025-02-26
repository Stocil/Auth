import { styled } from '@mui/material';

import { Divider } from 'components/divider';
import { HorizontalStack, VerticalStack } from 'components/stack';

export const ProfileContainer = styled(HorizontalStack)`
  height: 500px;

  gap: 70px;
  justify-content: space-between;
  align-items: start;
`;

export const ProfileUserInfoWrapper = styled(VerticalStack)`
  align-items: start;
  gap: 50px;
  margin-top: 30px;
`;

export const ProfileUserField = styled(VerticalStack)`
  width: 400px;
  align-items: start;
`;

export const ProfileUserFieldDivider = styled(Divider)`
  height: 3px;
`;
