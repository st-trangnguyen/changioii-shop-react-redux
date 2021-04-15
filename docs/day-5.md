# Day-5

### Setting Up, Rendering Routes and Switching Between Pages

*Installing & Setting up*

- Install `react-router-dom` and `@types/react-router-dom` (if use Typescript).
- Create the components we want to render.
- Import `BrowserRouter`, `Route` and `Switch` components from the `react-router-dom` API.
- Wrap the App component inside the `BrowserRouter` to give the App routing functionalities.
- Add `<Route />` component to our return statement and change its props path and component to its respective values.
- Wrap all `<Route />` components inside the `<Switch />` component to make sure only one page render per request.
- Add the `exact` keyword to make sure our app render only components that match specifically with that path .


```
// App.tsx
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Products from './pages/products/containers/Products';
import Carts from './pages/carts/containers/Carts';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Products } />
      <Route path="/carts" component={ Carts }/>
    </BrowserRouter>
  );
}

export default App;

```

### Using Links to Switch Pages

- import `Link` component from `react-router-dom` and add value to `to` prop.

```
import React from 'react';
import { Link } from 'react-router-dom'

export const Nav = () => {

  return(
    <nav>
      <ul>
        <li className="user-action-item">
          <Link className="btn btn-has-icon btn-user-action" to="/">
            <span className="icon-home"></span>
          </Link>
        </li>
        <li className="user-action-item">
          <Link className="btn btn-has-icon btn-user-action" to="/carts">
            <span className="icon-cart"></span>
          </Link>
        </li>
      <ul>
    <nav>
  )
}
```

### Absolute vs Relative Paths

- Relative Path: `import exampleFunc from '../../../../../shared/functions/commonFunction';`
- Absolute Path: `import exampleFunc from 'shared/functions/commonFunction';`

Typing those relative paths with directory access dots in deeply nestest tree is very cumbersome and confusing.
Absolute Path is easier for reading.

If use Typescript, you can config `baseUrl` in `tsconfig.json` file to use absolute path.

```
{
  "compilerOptions": {
    "baseUrl": "src/",
    ....
  }
}
```

### Passing Route Parameters 

#### Query params

- Use `useLocation` hook from `react-router-dom` and `URLSearchParams` to get query params

#### Params

- Using `useParams()` hook

#### Hash

- To get hash, use `window.location.hash`
