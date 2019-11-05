import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import NewUser from './pages/NewUser';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route exact path="/novo-usuario" component={NewUser} />
  </BrowserRouter>
);

export default App;
