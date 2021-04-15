import { AnyAction } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';
import { APIService, ENDPOINT } from '@app/shared/helpers/api/api.helper';
import { getListCategoriesSuccess, getListCategoriesError } from './categories.actions';
import * as types from '@app/shared/constant/types';

const http = new APIService();

function* getListCategories() {
  try {
    const res = yield http.get([ENDPOINT.categories.index]);
    yield put(getListCategoriesSuccess(res));
  } catch (error) {
    yield put(getListCategoriesError(error));
  }
}

export function* watchGetListCategories() {
  yield takeLatest(types.GET_LIST_CATEGORIES, getListCategories);
}
