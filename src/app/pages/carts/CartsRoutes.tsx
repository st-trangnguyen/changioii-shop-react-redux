import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Carts = React.lazy(() => import('./containers/Carts'));

export default function CartsRoutes() {
  return (
    <Switch>
      <Route exact path='/carts' component={Carts} />
    </Switch>
  );
}
