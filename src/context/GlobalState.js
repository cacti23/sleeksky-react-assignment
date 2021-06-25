import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  time: new Date().toLocaleTimeString(),
  count: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function updateTime() {
    dispatch({
      type: 'UPDATE_TIME',
    });
  }
  function updateCount() {
    dispatch({
      type: 'UPDATE_COUNT',
    });
  }

  return (
    <GlobalContext.Provider
      value={{ time: state.time, count: state.count, updateTime, updateCount }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
