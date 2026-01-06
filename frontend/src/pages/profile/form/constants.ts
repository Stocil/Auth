import { SxProps, Theme } from '@mui/material';

export const profileDirtyFieldSx: SxProps<Theme> = {
  '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: ({ palette }) => palette.success.main,
  },
  '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: ({ palette }) => palette.success.main,
  },
};
