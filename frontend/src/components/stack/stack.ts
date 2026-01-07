import { Stack, styled } from '@mui/material';

type VerticalStackProps = {
  gap?: string;
};

export const VerticalStack = styled(Stack)<VerticalStackProps>`
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap ?? '10px'};
`;

export const HorizontalStack = styled(Stack)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
