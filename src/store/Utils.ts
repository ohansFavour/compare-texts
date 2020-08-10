import { TInitialState } from './Types';
export const BASE_URL =
  'https://b5b5610e-28c5-44a1-b107-7a50dd1c6985.mock.pstmn.io';

export const getInitialState = (key: string): TInitialState => {
  const initialState: TInitialState = {
    isLoadingUser: false,
    currentUser: null,
    isComparing: false,
    isFetchingHistory: false,
    historyResult: null,
    result: null,
  };
  return JSON.parse(localStorage.getItem(key) as string) || initialState;
};
