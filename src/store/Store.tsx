import React, { createContext, useReducer, useEffect } from 'react';

// helpers
import reducer from './Reducer';
import { getInitialState } from './Utils';

// types
import { TProviderProps, TInitialState, IAction } from './Types';


const initialState = getInitialState('state');

export const StoreContext = createContext<{
  state: TInitialState;
  dispatch: React.Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StoreProvider = ({ children }: TProviderProps) => {
  const [state, dispatch] = useReducer<(state: any, action: IAction) => any>(
    reducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
