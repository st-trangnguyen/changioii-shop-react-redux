# Day-1

### Using Create React App
Create a new React application step by step 
```
npm i -g npx
npx create-react-app my-app
cd my-app
npm start
```

### Creating a Functional Component
The definition of the functional component like which happens with just a JavaScript Function which has to return JSX.

|  Functional Component |  Class Component |
|---|---|
|export const HelloWorld = () => {<br>return(<br>`<h1>Hello World</h1>`<br></br)>)</br}>}   |  class HelloWorld extends React.Component {<br> render() {<br>return `<h1>Hello Wolrd </h1>;`<br>}  |


### Working with Components & Re-Using Them
*ProductItem.tsx*
```
import React from 'react';

const ProductItem = () => {
  return <div className="product-item">Product item work</div>
};

export default ProductItem;
```

*Products.tsx*
```
import Reac from 'react';

import ProductItem from './ProductItem';

const Products = () => {
	return (
		<ProductItem />
		<ProductItem />
		<ProductItem />
	)
};

export default Products;
```
