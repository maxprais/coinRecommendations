import { PRODUCT_ACTION_TYPES } from '../../consts/action-types';

const initialState = {
    shopItems: []
};
export const ShopReducer = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_ACTION_TYPES.GET_SHOP_PRODUCTS:
          return { ...state, shopItems: state.shopItems.concat(action.payload) };
      case PRODUCT_ACTION_TYPES.CHOOSE_PRODUCT:
        return { ...state, productChosen: action.payload.success };
        default:
            return state;
    }
};
