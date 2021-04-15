# Day-6

### Navigating Programmatically

use useHistory hook

```

import { useHistory } from "react-router-dom";

export const Nav = () {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

```

### The “withRouter” HOC & Route Props

#### The “withRouter” HOC and why need withRouter
- withRouter HOC(higher-order component) allows we to get access to the history object’s and the closest <Route>'s match. 
- withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
- If you want that your component receive RouterProps, but don't want to wrap it in <Route component={YourComponent}>. You can just use withRouter function to connect component to the router.

#### Route Props

To pass props through <Route /> component we need pass `component` prop an inline function which return component will be render and pass props through this component

```
<Route exact path="/" component={ () => <Products productList={list} /> } />
```

But above code has bad performance. To increase performace, we can use `render` prop instead of `component`

```
<Route exact path="/" render={ () => <Products productList={list} /> } />
```

### Nested Routes

```
<BrowserRouter>
  <Switch>
    <Route path="/cards/:id/edit" component={CartsEdit} />
    <Route path="/cards/:id" component={CartsDetail} />
    <Route path="/carts" component={Carts} />
  </Switch>
</BrowserRouter>
```

### Working with Guards

