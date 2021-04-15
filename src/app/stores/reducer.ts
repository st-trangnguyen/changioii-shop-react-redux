// redux/root-reducer.js
import { combineReducers } from 'redux';

import { categories } from '@app/shared/containers/categories/categories.reducers';
import { cart } from '@app/pages/carts/carts.reducers';

const rootReducer = combineReducers({
  categories,
  cart
});

export default rootReducer;
