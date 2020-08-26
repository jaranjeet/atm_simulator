import React, { createContext } from 'react';

export const AppStateContext = createContext({});
export const AppStateProvider = AppStateContext.Provider;

export const AppDispatchContext = createContext({});
export const AppDispatchProvider = AppDispatchContext.Provider;
