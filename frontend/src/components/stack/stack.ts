import { Stack, styled } from '@mui/material';

type StackProps = {
  gap?: string;
};

const DefaultStack = styled(Stack)<StackProps>`
  gap: ${({ gap }) => gap ?? '10px'};
`;

export const VerticalStack = styled(DefaultStack)<StackProps>`
  justify-content: center;
  align-items: center;
`;

export const HorizontalStack = styled(DefaultStack)<StackProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
