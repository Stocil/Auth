import { OptionsObject, useSnackbar as useNotistackSnackbar } from 'notistack';

export const useSnackbar = () => {
  const {
    enqueueSnackbar: enqueueSnackbarDefault,
    closeSnackbar: closeSnackbarDefault,
  } = useNotistackSnackbar();

  const enqueueSnackbar = (
    message: string | undefined,
    options?: OptionsObject,
  ) => {
    const variant = options?.variant ?? 'success';
    const isSuccess = variant === 'success';

    enqueueSnackbarDefault(message, {
      autoHideDuration: isSuccess ? 3000 : 7000,
      ...options,
      variant,
    });
  };

  const closeSnackbar = () => {
    closeSnackbarDefault();
  };

  return { enqueueSnackbar, closeSnackbar };
};
