import * as types from '@app/shared/constant/types';
import { combineReducers } from 'redux';
import { ReduxStateApi } from '@app/model/reduxStateApi';

const initialState: ReduxStateApi = {
  isLoading: false,
  isProcessing: false,
  hasError: false,
  data: null,
  error: null,
};

export function categories(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_LIST_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LIST_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case types.GET_LIST_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: payload.error,
      };
    default:
      return state;
  }
}
