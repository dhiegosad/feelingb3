import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

import store from './store';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment />
      <Routes />
    </Router>
  </Provider>
);

export default App;
