import * as types from '@app/shared/constant/types';

const initialState = {
  data: []
};

export const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_CART:
      const index = state.data.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        state.data[index] = payload;
      } else {
        state.data = [...state.data].concat([payload]);
      }
      return {
        ...state,
        data: JSON.parse(JSON.stringify(state.data))
      };
    case types.DELETE_CART:
      const idx = state.data.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        state.data.splice(idx, 1);
      }
      return {
        ...state,
        data: JSON.parse(JSON.stringify(state.data))
      };
    default:
      return state;
  }
};
