import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Products = React.lazy(() => import('./containers/Products'));

export default function ProductsRoutes() {
  return (
    <Switch>
      <Route exact path='/products' component={Products} />
    </Switch>
  );
}
