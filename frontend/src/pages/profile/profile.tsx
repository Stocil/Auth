import { FC } from 'react';

import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { getUserInfo } from 'store/user/selectors';

import { PageWrapper } from 'components/page-wrapper';

import { PageEmptyPage } from './empty-page';

export const Profile: FC = () => {
  const userData = useSelector(getUserInfo);

  return (
    <PageWrapper
      isLoading={false}
      isEmptySearch={!userData}
      noDataFallback={<PageEmptyPage />}
    >
      <Typography variant='h3'>Профиль</Typography>
    </PageWrapper>
  );
};
