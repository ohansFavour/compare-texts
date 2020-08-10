import React, { createContext, useReducer, useEffect } from 'react';

// helpers
import reducer from './Reducer';
import { getInitialState } from './Utils';

// types
import { TProviderProps } from './Types';

const initialState = {};

const getState = getInitialState('state') || initialState;

export const StoreContext = createContext(getState);

export const StoreProvider = ({ children }: TProviderProps) => {
  const [state, dispatch] = useReducer(reducer, getState);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch } as any}>
      {children}
    </StoreContext.Provider>
  );
};
