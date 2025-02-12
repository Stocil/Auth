import { Divider as MuiDivider, styled } from '@mui/material';
import { indigo } from '@mui/material/colors';

export const Divider = styled(MuiDivider)`
  height: 1px;
  background-color: ${() => indigo[300]};
`;
