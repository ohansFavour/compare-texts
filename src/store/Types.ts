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



type TCurrentUser = {
  success: boolean;
  message: string;
  token: string;
  username: string;
};

export type TResult = {
  first_student: string;
  second_student: string;
  date: string;
  second_file: string;
  result: string;
};
export type THistoryResult = {
  success: boolean;
  message: string;
  result: TResult[];
};

export type TCompareResult = {
  success: boolean;
  message: string;
  result: string | null;
};

export type TInitialState = {
  isLoadingUser: boolean;
  currentUser: TCurrentUser | null;
  isComparing: boolean;
  isFetchingHistory: boolean;
  historyResult: TResult[] | null;
  result: null;
};


export interface IAction {
  type: string;
  payload?: any;
}
export interface ICurrentUser {
  message: string;
  success: boolean;
  token: string;
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



