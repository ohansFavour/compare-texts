export const BASE_URL =
  'https://b5b5610e-28c5-44a1-b107-7a50dd1c6985.mock.pstmn.io';

export const getInitialState = (key: string):any=> {
  return JSON.parse(localStorage.getItem(key) as string);
};
