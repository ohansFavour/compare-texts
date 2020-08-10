import { IAction, types, TInitialState } from './Types';

const reducer = (state: TInitialState, action: IAction) => {
  switch (action.type) {
    case types.USER_ASYNC_START:
      return { ...state, isLoadingUser: true };

    case types.USER_ASYNC_END:
      return { ...state, isLoadingUser: false };

    case types.SET_USER:
      console.log(action.payload.data)
      return {
        ...state,
        currentUser: action.payload.data,
        isLoadingUser: false,
      };
    case types.COMPARE_ASYNC_START:
      return {
        ...state,
        isComparing: true,
      };

    case types.SET_COMPARE_RESULT:
      return {
        ...state,
        isComparing: false,
        result: action.payload.data.result,
      };

    case types.COMPARE_ASYNC_END:
      return { ...state, isComparing: false };

    case types.HISTORY_ASYNC_START:
      return {
        ...state,
        isFetchingHistory: true,
      };

    case types.SET_HISTORY_RESULT:
      return {
        ...state,
        isFetchingHistory: false,
        historyResult: action.payload.data.history,
      };

    case types.HISTORY_ASYNC_END:
      return { ...state, isFetchingHistory: false };

    case types.LOGOUT:
      return {
        ...state,
        isLoadingUser: false,
        currentUser: null,
        isComparing: false,
        isFetchingHistory: false,
        historyResult: null,
        result: null,
      };

    default:
      return state;
  }
};

export default reducer;
