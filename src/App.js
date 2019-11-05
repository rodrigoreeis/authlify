import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import NewUser from './pages/NewUser';
import Home from './pages/Home';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/novo-usuario" component={NewUser} />
  </BrowserRouter>
);

export default App;
