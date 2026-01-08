import { SxProps, Theme } from '@mui/material';

export const profileDirtyFieldSx: SxProps<Theme> = {
  '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: ({ palette }) => palette.success.main,
    transition: 'border-color 0.5s',
  },
};
