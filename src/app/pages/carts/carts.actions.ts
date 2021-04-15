import * as types from '@app/shared/constant/types';

export const addToCart = (payload) => {
  return {
    type: types.ADD_CART,
    payload
  };
};

export const deleteFromCart = (payload) => {
  return {
    type: types.DELETE_CART,
    payload
  };
};
