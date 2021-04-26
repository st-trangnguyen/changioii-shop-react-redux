import React from 'react';
import { Route, Switch } from 'react-router-dom';

// const LoginPage = React.lazy(() => import('./containers/Login'));
// const RegisterPage = React.lazy(() => import('./containers/Register'));
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';

export default function AuthRoutes() {

  return (
    <Switch>
      <Route path='/auth/register' component={RegisterPage} />
      <Route path='/auth/login' component={LoginPage} />
    </Switch>
  );
}
