import { ACTION_TYPES } from '../../consts/action-types';

const initialState = {
    shopItems: []
};
export const ShopReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TYPES.GET_SHOP_PRODUCTS:
          return { ...state, shopItems: state.shopItems.concat(action.payload) };
        default:
            return state;
    }
};
