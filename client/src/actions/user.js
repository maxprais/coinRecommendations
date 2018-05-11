import { USER_ACTION_TYPES } from '../consts/action-types';
import { HttpConnection } from '../common/connection/connection';
import { ROUTES } from '../common/api/routes';
import store from '../store/index';

const connection = new HttpConnection();

export const getUserPurchasedProducts = async () => {
  const allProducts = await connection.sendHttp({ url: ROUTES.getProductsByUser });
  store.dispatch(({ type: USER_ACTION_TYPES.GET_USER_PURCHASED, payload: allProducts }));
};
