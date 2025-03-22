import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Admin from './pages/Admin';
import User from './pages/User';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
};

export default App;