import {put, takeLatest} from 'redux-saga/effects';
import * as types from '@app/shared/constant/types';
import { AnyAction } from 'redux';
import { APIService, ENDPOINT } from '@app/shared/helpers/api/api.helper';

const http = new APIService();

export function* loginUserSaga({ payload }: AnyAction) {
  const res = yield http.post([ENDPOINT.auth.index], payload)
    .then(response => response);

  yield put({ type: types.SET_CURRENT_USER, payload: res });
}

export function* watchAuth() {
  yield takeLatest(types.LOGIN_USER, loginUserSaga);
}
