import { PRODUCT_ACTION_TYPES } from '../../consts/action-types';

const initialState = {
  shopItems: []
};
export const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.GET_SHOP_PRODUCTS:
        return { ...state, shopItems: action.payload };
    case PRODUCT_ACTION_TYPES.CHOOSE_PRODUCT:
      return { ...state, productChosen: action.payload.success };
    case PRODUCT_ACTION_TYPES.RESET_ALERT:
      return { ...state, productChosen: false };
    case PRODUCT_ACTION_TYPES.GET_USER_PURCHASED:
      return { ...state, shopItems: action.payload };
      default:
          return state;
  }
};
