import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: indigo[500] },
    background: { paper: '#fff', default: '#e6e6e6' }
  }
});

const browserHistory = createBrowserHistory();

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App;

/*
export default {
  palette: {
    type: 'light',
    primary: { main: '#00AAE1', dark: '#143C8C', contrastText: '#fff', },
    secondary: { main: '#64B42D', dark: '#008732', contrastText: '#fff', },
    error: { main: '#BD0043', contrastText: '#fff', },
    divider: '#D7D6D5',
    background: { paper: '#fff', default: "#ff0000" },
  },
  // Use the system font over Roboto.
  typography: { fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif', htmlFontSize: 16, },
};
const theme = createMuiTheme(uiThemeConfig);
*/
