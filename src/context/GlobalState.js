import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  time: new Date().toLocaleTimeString(),
  click: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function updateTime() {
    dispatch({
      type: 'UPDATE_TIME',
    });
  }

  return (
    <GlobalContext.Provider
      value={{ time: state.time, click: state.click, updateTime }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
