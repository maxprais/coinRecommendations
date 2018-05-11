import { PRODUCT_ACTION_TYPES, USER_ACTION_TYPES } from '../consts/action-types';
import { HttpConnection } from '../common/connection/connection';
import { ROUTES } from '../common/api/routes';
import store from '../store/index';

const connection = new HttpConnection();

export const getShopProducts = async () => {
  const allProducts = await connection.sendHttp({ url: ROUTES.getAllProducts });
  store.dispatch(({ type: PRODUCT_ACTION_TYPES.GET_SHOP_PRODUCTS, payload: allProducts }));
};

export const chooseProduct = async (stateId, productId) => {
  const notify = await connection.sendHttp({
    url:  `${ROUTES.chooseProduct}/${1}/${productId}/${stateId}`,
    method: 'POST'});

  store.dispatch({ type: PRODUCT_ACTION_TYPES.CHOOSE_PRODUCT, payload: notify });
};

export const getUserPurchasedProducts = async (userId) => {
  const allProducts = await connection.sendHttp({ url: `${ROUTES.getProductsByUser}/${userId}` });
  store.dispatch(({ type: PRODUCT_ACTION_TYPES.GET_USER_PURCHASED, payload: allProducts }));
};

export const resetAlert = () => store.dispatch({ type: 'RESET_ALERT' });