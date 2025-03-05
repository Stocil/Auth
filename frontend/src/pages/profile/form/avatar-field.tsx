import PanoramaIcon from '@mui/icons-material/Panorama';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

import { setProfilePreviewAvatar } from 'store/profile/slice';

import { Input } from 'components/input';
import { InputField } from 'components/input-field';
import { Tooltip } from 'components/tooltip';

export const ProfileAvatarField = () => {
  const dispatch = useDispatch();

  const onClick = (newUrl: string) => {
    if (newUrl) {
      dispatch(setProfilePreviewAvatar(newUrl));
    }
  };

  return (
    <InputField
      name='avatar'
      render={({ field }) => (
        <Input
          type='url'
          label='URL ссылка на аватар'
          value={field.value}
          onChange={field.onChange}
          variant='outlined'
          slotProps={{
            input: {
              endAdornment: (
                <Tooltip title='Предпросмотр'>
                  <IconButton onClick={() => onClick(field.value)}>
                    <PanoramaIcon color='primary' />
                  </IconButton>
                </Tooltip>
              ),
            },
          }}
        />
      )}
    />
  );
};
