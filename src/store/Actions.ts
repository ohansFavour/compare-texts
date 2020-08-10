import axios from 'axios';

// helpers
import { BASE_URL } from './Utils';

import { types, IActionAuthenticate} from './Types';

export const authenticateAction = async ({
  username,
  password,
  remember,
  dispatch,
}: IActionAuthenticate) => {
  dispatch({
    type: types.USER_ASYNC_START,
  });

  try {
    const data = await axios({
      method: 'post',
      url: `${BASE_URL}/login`,
      data: {
        username,
        password,
        remember,
      },
    });

    dispatch({
      type: types.SET_USER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.USER_ASYNC_END,
    });
  }
};

export const compareAction = async ({
  firstName,
  firstFile,
  secondName,
  secondFile,
  dispatch,
  history,
}: any) => {
  dispatch({
    type: types.COMPARE_ASYNC_START,
  });

  try {
    const data = await axios({
      method: 'post',
      url: `${BASE_URL}/compare`,
      data: {
        firstName,
        firstFile,
        secondName,
        secondFile,
      },
    });

    dispatch({
      type: types.SET_COMPARE_RESULT,
      payload: data,
    });
    history.push('/result');
  } catch (error) {
    dispatch({
      type: types.COMPARE_ASYNC_END,
    });
  }
};

export const historyAction = async ({
  firstName,
  firstFile,
  dispatch,
  setTab,
}: any) => {
  dispatch({
    type: types.HISTORY_ASYNC_START,
  });

  try {
    const data = await axios({
      method: 'post',
      url: `${BASE_URL}/history`,
      data: {
        firstName,
        firstFile,
      },
    });

    dispatch({
      type: types.SET_HISTORY_RESULT,
      payload: data,
    });
    setTab(2);
  } catch (error) {
    dispatch({
      type: types.HISTORY_ASYNC_END,
    });
  }
};

export const logoutAction = (dispatch: any) => {
  dispatch({
    type: types.LOGOUT,
  });
};
