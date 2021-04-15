/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Categories } from './shared/containers/categories';
const PageRoutes = React.lazy(() => import('./pages/PageRoutes'));
const AuthRoutes = React.lazy(() => import('./auth/AuthRoutes'))

export default function Routes() {
  /* if else for Features or Auth layout appears */
  return (
    <div className="wrapper">
      <Route exact path="/" render={() => (
        <Redirect to="products" />
      )} />
      <AuthRoutes/>
      <PageRoutes/>
      <Categories/>
    </div>
  );
}
