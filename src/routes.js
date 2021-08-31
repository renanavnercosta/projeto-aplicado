import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Dashboard';
import About from './pages/About/About';
import CreateLogin from './pages/CreateLogin/CreateLogin';
import CreateDepartment from './pages/CreateDepartment/CreateDepartment';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EditeEmployee from './pages/EditeEmployee/EditeEmployee';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Home} />
        <Route path="/create-login" exact component={CreateLogin} />
        <Route path="/about" exact component={About} />
        <Route path="/create-department" exact component={CreateDepartment} />
        <Route path="/create-employee" exact component ={CreateEmployee} />
        <Route path="/edite-employee" exact component ={EditeEmployee} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
