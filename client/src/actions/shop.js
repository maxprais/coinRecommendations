import { ACTION_TYPES } from '../consts/action-types';
import { HttpConnection } from '../common/connection/connection';
import { ROUTES } from '../common/api/routes';
import store from '../store/index';

const connection = new HttpConnection();

export const getShopProducts = () => {
  return connection.sendHttp({ url: ROUTES.getAllProducts })
    .then(allProducts => store.dispatch(({ type: ACTION_TYPES.GET_SHOP_PRODUCTS, payload: allProducts })));
};