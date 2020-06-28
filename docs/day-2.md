|   | Angular  |  React |
| ------------ | ------------ | ------------ |
| Binding Variables into View  |  `<h1 class="title"> {{ title }} </h1>` | `<h1 className="title"> { title } </h1>`  |
| Input  | *parent.component.html*<br>`<app-child [title]="'title'"></app-child>`<br> <br> *child.component.ts*<br>`@Input title: string `<br><br>*child.component.html*<br>`<h1>{{ title }} </h1>`   |  *Parent.tsx*<br>`<Child title={'hello'} />`<br><br>*Child.tsx*<br>`export const Child = (props) => {`<br>`return <h1> { props.title } </h1>;`<br> `}` |
| Output  | *parent.component.html*<br>`<app-child (addNew)="addNew(value)"></app-child>`<br><br> *child.component.ts*<br>`@Output addNew = new EventEmitter();`  | *Parent.tsx* <br>`function handleInputChange(evt) {`<br>` console.log(evt);`<br>`}`<br> `const Parent = () => {`<br>`<Child onInputChange={ handleInputChange } />` <br> `}`<br><br> *Child.tsx*<br>`const Child = (props) => {`<br>`<input onChange={ props.onInputChange } />`<br>`}`   |
|Conditional and List rendering   | *hello.component.html*<br>`<div *ngIf="products">`<br>`<ul *ngFor="let item of products"></ul>`<br>`</div>` | *Hello.tsx*<br>`<ul className="product-list row">`<br>`{`<br>`products && products.map((item) => {`<br>`return(`<br>`<ProductItem key={ item.id } product={ item } />`<br>`)`<br>`})`<br>`}`<br>`</ul>`|