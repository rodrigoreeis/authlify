import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login';
import NewUser from './pages/NewUser';

const App = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="novo-usario" component={NewUser} />
  </Router>
);

export default App;
