# Day-4

### Understanding the “children” Prop
`this.props.children` displays whatever you include between the opening and closing tags when invoking a component.
It helps us define component content and reuse component easier.

```
import React from 'react';
import Child from './Child';

export const Parent = () {
  return(
    <Child title={'Title'}>
      <h2>Sub Title</h2> // Here is props.children
    </Child>
  )
}
```

### Different between state and props
|   | State  |  Props |
| ------------ | ------------ | ------------ |
| Definition  | Are variables which are directly initialized and managed in internal component  | Are variables which are passed to component by its parent component  |
| Changing  | Can be changed in internal component  |  Can not be changed in component, only be changed by its parent component  |


### Life cycle of component (Research both class-based component and functional component)

*Class component*
- componentWillMount() --> Excute before DOM render
- componentDidMount() --> Excute only one time after DOM render
- componentWillReceiveProps()  --> Excute when props change
- shouldComponentUpdate() --> Determine the component update or not
- componentWillUpdate() --> If shouldComponentUpdate() hook return true, this hook will excute after excuting render function
- componentDidUpdate() --> Excute when component re-render
- componentWillUnmount() --> Excute when component destroy

*Functional component*

In functional component we use useState and useEffect hook

- useState() --> same as componentWillMount(), we can define state before DOM render

- If we pass an empty array, we are not watching any variables, and it will only update state on the first render like componentDidMount.

```
  useEffect( () => { fetchData() }, [] );
```
- If we pass variable(s) array to second params of useEffect hook. It will work same as componentDidUpdate(), watch the variables in array change and re-run

```
useEffect( () => { fetchData() }, [ userName ] ); --> in this case it will watch userName
```

- If we dont pass second params of useEffect hook. useEffect will be re-run any time after state changed.

```
useEffect( () => { fetchData() });
```

- To handle cleanup after component unmounts, we need to return a function inside callback function 

```
useEffect(() => {
  window.addEventListener("scroll", () => {});
  return () => {
    window.removeEventListener("scroll", () => {})
  }
}, []);
```
