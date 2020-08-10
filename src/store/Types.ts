export const types = {
  SET_USER: 'SET_USER',
  USER_ASYNC_START: 'USER_ASYNC_START',
  USER_ASYNC_END: 'USER_ASYNC_END',
  SET_COMPARE_RESULT: 'SET_COMPARE_RESULT',
  COMPARE_ASYNC_START: 'COMPARE_ASYNC_START',
  COMPARE_ASYNC_END: 'COMPARE_ASYNC_END',
  SET_HISTORY_RESULT: 'SET_HISTORY_RESULT',
  HISTORY_ASYNC_START: 'HISTORY_ASYNC_START',
  HISTORY_ASYNC_END: 'HISTORY_ASYNC_END',
  LOGOUT: 'LOGOUT',
};

export interface IAction {
  type: string;
  payload: any;
}
export interface ICurrentUser {
  message: string;
  success: boolean;
  token: string;
}
export interface IState {
  currentUser: any | null;
  isLoadingUser: boolean;
}

export type TProviderProps = {
  children: React.ReactNode;
};

export interface IActionAuthenticate {
  username: string;
  password: string;
  remember: boolean;
  dispatch: any;
}

export interface IActionLogout {
  dispatch: any;
}


export interface IContextValue {
  state: IState;
  dispatch: any;
}


