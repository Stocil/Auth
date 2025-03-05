import { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getUserInfo } from 'store/user/selectors';

import { Avatar } from 'components/avatar';
import { PageWrapper } from 'components/page-wrapper';
import { VerticalStack } from 'components/stack';

import { routesPaths } from 'routes/routes';

import { getTokenFromCookie } from 'utils/token';

import { UserEmptySearch } from './empty-search';
import { UserInfoField } from './info-field';
import { UserContainer, UserCornerId } from './user-styles';

export const User: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  getTokenFromCookie();

  const { id: currentUserId } = useSelector(getUserInfo);

  useEffect(() => {
    if (Number(id) === currentUserId) {
      navigate(routesPaths.profile);
    }
  }, [id, currentUserId]);

  return (
    <PageWrapper
      isLoading={false}
      isEmptySearch={false}
      noDataFallback={<UserEmptySearch />}
    >
      <UserContainer>
        <Avatar
          src={
            'https://i.pinimg.com/736x/28/50/bc/2850bcda883b5c0aa511ea3b02a04391.jpg'
          }
          noUrlText={'test2'?.[0]}
          size={350}
          textSize='h1'
        />

        <VerticalStack sx={{ alignItems: 'start' }} spacing={3}>
          <UserInfoField label='Логин' value='stas' />
          <UserInfoField label='Email' value='vashurov02@mail.ru' />
        </VerticalStack>

        <UserCornerId>1</UserCornerId>
      </UserContainer>
    </PageWrapper>
  );
};
