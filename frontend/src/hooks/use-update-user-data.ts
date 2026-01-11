import { useDispatch } from 'react-redux';

import { setUserInfo, setUserToken } from 'store/user/slice';

import { getUserDataFromToken, setCookieToken } from 'utils/token';

import { useSnackbar } from './use-snackbar';

type onUpdateDataParams = {
  token: string;
  successMessage: string;
  updateDataFromToken?: boolean;
};

type Hook = () => {
  onUpdateData: (params: onUpdateDataParams) => void;
};

export const useUpdateUserData: Hook = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onUpdateData = ({
    token,
    successMessage,
    updateDataFromToken = false,
  }: onUpdateDataParams) => {
    if (updateDataFromToken) {
      const userData = getUserDataFromToken(token);
      dispatch(setUserInfo(userData));
    }

    dispatch(setUserToken(token));
    enqueueSnackbar(successMessage);
    setCookieToken(token);
  };

  return { onUpdateData };
};
