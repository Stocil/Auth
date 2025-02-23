import { AppBar, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 20px;
  position: fixed;
`;
