import { FC, PropsWithChildren } from 'react';

import { CircularProgress } from '@mui/material';

type Props = PropsWithChildren<{
  isLoading: boolean;
}>;

export const Loader: FC<Props> = ({ isLoading, children }) => {
  if (isLoading) {
    return <CircularProgress size={80} color='primary' />;
  }

  return children;
};
