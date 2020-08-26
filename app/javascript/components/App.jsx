import React, { useReducer } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';
import rootReducer, { initialState as rootInitialState } from '../reducers/rootReducer';
import { AppStateProvider, AppDispatchProvider } from '../providers/rootProvider';
import combineReducer from '../utils/combineReducers';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
  },
});

export default function App() {

  const combinedReducers = combineReducer({
    root: rootReducer,
  });



  const [state, dispatch] = useReducer(combinedReducers, {
    root: rootInitialState,
  });

  return(
    <ThemeProvider theme={theme}>
      <AppStateProvider value={state}>
        <AppDispatchProvider value={dispatch}>
          <Routes />
        </AppDispatchProvider>
      </AppStateProvider>
    </ThemeProvider>
  )
}
