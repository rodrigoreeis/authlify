import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Login from './pages/Login';
import NewUser from './pages/NewUser';
import Home from './pages/Home';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/novo-usuario" component={NewUser} />
    </BrowserRouter>
  </Provider>
);

export default App;
