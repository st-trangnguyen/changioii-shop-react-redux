import actions from './products.actions';

const initialState = [
  {
    id: 1,
    name: 'Item 1',
    image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
    oldPrice: 250,
    newPrice: 150,
    saleOff: 29
  },
  {
    id: 2,
    name: 'Item 3',
    image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
    oldPrice: 250,
    newPrice: 150,
    saleOff: 29
  },
  {
    id: 3,
    name: 'Item 3',
    image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
    oldPrice: 250,
    newPrice: 150,
    saleOff: 29
  },
  {
    id: 4,
    name: 'Item 4',
    image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
    oldPrice: 250,
    newPrice: 150,
    saleOff: 29
  },
  {
    id: 5,
    name: 'Item 5',
    image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
    oldPrice: 250,
    newPrice: 150,
    saleOff: 29
  },
  {
    id: 6,
    name: 'Item 6',
    image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
    oldPrice: 250,
    newPrice: 150,
    saleOff: 29
  },
  {
    id: 7,
    name: 'Item 7',
    image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
    oldPrice: 250,
    newPrice: 150,
    saleOff: 29
  },
  {
    id: 8,
    name: 'Item 8',
    image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/elic17_1_360x.jpg?v=1582273245',
    oldPrice: 250,
    newPrice: 150,
    saleOff: 29
  }
];

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return state;
    default:
      return state;
  }
}

export default productsReducer;
