import { styled } from '@mui/material';

import { HorizontalStack, VerticalStack } from 'components/stack';

type ProfileUserFieldWrapperProps = {
  isDirty?: boolean;
};

export const ProfileContainer = styled(HorizontalStack)`
  gap: 70px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileUserForm = styled('form')`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

export const ProfileUserFields = styled(VerticalStack)`
  align-items: start;
  gap: 30px;
`;

export const ProfileUserFieldWrapper = styled(
  VerticalStack,
)<ProfileUserFieldWrapperProps>`
  width: 400px;

  border-bottom: 2px solid;
  border-color: ${({ theme, isDirty }) =>
    `${isDirty ? theme.palette.success.main : theme.palette.primary.main}`};
  border-radius: 8px;
  padding: 10px 0px;

  transition: border-color 0.5s;
`;
