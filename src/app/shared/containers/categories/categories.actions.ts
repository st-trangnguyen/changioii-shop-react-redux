import * as types from '@app/shared/constant/types';

export const getListCategories = () => {
  return {
    type: types.GET_LIST_CATEGORIES
  };
};
export const getListCategoriesSuccess = (payload) => {
  return {
    type: types.GET_LIST_CATEGORIES_SUCCESS,
    payload,
  };
};
export const getListCategoriesError = (error: Error) => {
  return {
    type: types.GET_LIST_CATEGORIES_ERROR,
    payload: { error },
  };
};
