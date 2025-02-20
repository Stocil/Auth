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

    enqueueSnackbarDefault(message, {
      ...options,
      variant,
      autoHideDuration: 3000,
    });
  };

  const closeSnackbar = () => {
    closeSnackbarDefault();
  };

  return { enqueueSnackbar, closeSnackbar };
};
