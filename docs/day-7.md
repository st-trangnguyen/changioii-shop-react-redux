# Day - 7

### Pipe

Just create a function to tranform value and use it

```
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
```

```
{capitalizeFirstLetter(this.state.variable)}
```

### Directive

Use props.children

### Content distribution

```
export const Header = () => {
  return <header>This is header</header>
}
```

```
export const Footer = () => {
  return <footer>This is footer</footer>
}
```

```
export const Home = (props) => {
  return(
    <div>
      {props.header}
      <main>
        {props.children}
      </main>
      {props.footer}
    </div>
  )
}
```

```
export const App = () => {
  return(
    <Home header={ <Header />} footer={<Footer />}>
      <div>This is Home page</div>
    </Home>
}
```

### <ng-container> in React

use `<React.Fragment></React.Fragment>`

### Dependency Injection

