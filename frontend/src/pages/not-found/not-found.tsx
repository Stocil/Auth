import { SxProps, Typography } from '@mui/material';

import { Button } from 'components/button';
import { Link } from 'components/link';
import { VerticalStack } from 'components/stack';

import { routesPaths } from 'routes/routes';

const verticalStackGap = '0px';

const buttonSx: SxProps = {
  marginTop: '25px',
};

export const NotFound = () => {
  return (
    <VerticalStack gap={verticalStackGap}>
      <Typography variant='h1' fontWeight={700} color='primary'>
        404
      </Typography>

      <Typography variant='h6' fontWeight={700} color='primary'>
        Такой страницы пока не существует
      </Typography>

      <Link linkTo={routesPaths.main}>
        <Button size='large' sx={buttonSx}>
          На главную
        </Button>
      </Link>
    </VerticalStack>
  );
};
