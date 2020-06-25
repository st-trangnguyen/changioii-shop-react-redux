# Day-3

### Style and class binding
|   | Angular  |  React |
| ------------ | ------------ | ------------ |
| Class Binding  | `<h1 [class.d-none]="!isShow">Hello World</h1>`  |  `<div className={`banner ${active ? "active" : ""}`}>Hello World</div>` |
| Style Binding  | `<h1 [style.color]="true ? 'FFFFFF' : '000000'">Hello World</h1>`  |  `<h1 style={{ color: 'FFFFFF' }}>Hello World</h1>` |

### What is state ?

- The state in React store property values that belongs to the component.
- When state changes, the component will re-renders.
- We cannot pass data from a component to others component by state, just can create and manage it internally

### What is useState  ?

`useState` is a Hook that allows you to have state variables in functional components.


### How to add  Two Way Binding ?
In react we use `useState` hook to add two way bind

*Example for State, useState and two way binding*
```
import React, { useState } from 'react';

export const CountBtn = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked { count } times
    </button>
  )
}

```

### What is props , example ?

- Props stands for properties and is being used for passing data from one component to another.
- Props can only be pass one way from parent component to child component
- Props are read-only. Cannot change props value.
- Props are passed to components via HTML attributes.

*Parent.tsx*
```
import React, { useState} from 'react';

import Child from './Child.tsx';

export const Parent = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1'
      price: 200
    }
  ]);
  return(
    <ul className="product-list row">
      {
        products && products.map((item) => {
          return(
            <Child key={ item.id } product={ item } />
          )
        })
      }
    </ul>
  )
}
```

*Child.tsx*
```
import React from 'react';

export const Child = ({ product } : any) => {
  return(
    <li class="product-item">
      <span>{ product.name} </span>
      <span>{ product.price} $ </span>
    </li>
  )
}
```
