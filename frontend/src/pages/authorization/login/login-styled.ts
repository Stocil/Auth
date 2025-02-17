import { Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper)`
  width: 450px;
  height: 500px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LoginForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LoginFormFooter = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LoginFooterButtons = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`;
