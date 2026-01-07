import { styled } from '@mui/material';

import { HorizontalStack, VerticalStack } from 'components/stack';

type ProfileUserFieldWrapperProps = {
  isDirty?: boolean;
};

export const ProfileContainer = styled(HorizontalStack)`
  gap: 40px;
  justify-content: space-between;
  align-items: start;
`;

export const ProfileUserForm = styled('form')`
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
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
