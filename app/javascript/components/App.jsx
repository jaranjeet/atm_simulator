import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

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

  return(
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
