// redux/root-saga.js
import {all} from 'redux-saga/effects';

import { watchGetListCategories } from '@app/shared/containers/categories/categories.saga';

export default function* saga() {
  yield all([
    watchGetListCategories()
  ]);
}
