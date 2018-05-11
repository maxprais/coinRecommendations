import { USER_ACTION_TYPES } from '../../consts/action-types';

const initialState = {
  shopItems: []
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_USER_PURCHASED:
      return { ...state, shopItems: state.shopItems.concat(action.payload) };
    default:
      return state;
  }
};
