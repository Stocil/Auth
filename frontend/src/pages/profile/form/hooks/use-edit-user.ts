import { DefaultServerError } from 'types';

import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { useEditUserMutation } from 'store/api/user';
import { getUserInfo } from 'store/user/selectors';
import { setUserInfo } from 'store/user/slice';

import { useSnackbar } from 'hooks/use-snackbar';
import { useUpdateUserData } from 'hooks/use-update-user-data';

import { HttpCodes } from 'utils/http-codes';

import { ProfileFormFields } from '../type';

export const useEditUser = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { getValues, setError } = useFormContext<ProfileFormFields>();

  const { onUpdateData } = useUpdateUserData();

  const [editUser, { isLoading }] = useEditUserMutation();

  const { id } = useSelector(getUserInfo);

  const onEditUser = () => {
    const userNewData = getValues();

    if (!id) return;

    const userNewDataWithId = {
      id,
      ...userNewData,
    };

    editUser(userNewDataWithId)
      .unwrap()
      .then((token) => {
        const successMessage = 'Данные успешно обновлены';

        dispatch(setUserInfo(userNewDataWithId));
        onUpdateData({ token, successMessage });
      })
      .catch((e: DefaultServerError) => {
        enqueueSnackbar(e.data?.error, { variant: 'error' });

        if (e.status === HttpCodes.CONFLICT) {
          setError('login', {
            type: 'custom',
            message: 'Этот логин уже занят',
          });
        }
      });
  };

  return { onEditUser, isLoading };
};
