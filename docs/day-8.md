# Day-8


### Navigation Guard

```
const authGuard = (Component) => () => {
  return localStorage.getItem("token") ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};
```

```
const App = () => {
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={ Login }/>
      <Route exact path="/" render={ authGuard(Products) } />
      <Route path="/carts" render={ authGuard(Carts) }/>
    </Switch>
  </BrowserRouter>
}
```

### Resolver

```
npm install --save react-resolver
```

```
import { resolve } from "react-resolver";

@resolve("user", function(props) {
  return http.get(`/api/users/${props.params.userId}`);
})

const User = (props) => {
  return {
    const { user } = props;
    ...
  }
}

```