import {
  FETCH_PRODUCTS,
  SET_FILTERS_BY_STYLE,
  SET_FILTERS_BY_TYPE,
} from '../constants';
import { success, failed } from '../utils';

export const fetchProducts = (keyword) => (dispatch) => {
  dispatch(fetchProductsInit());

  fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
    .then((response) => response.json())
    .then((response) => {
      let { products } = response;

      if (keyword) {
        products = products.filter((p) =>
          String(p.name)
            .toLowerCase()
            .includes(keyword.toLowerCase())
        );
      }

      dispatch(fetchProductsSuccess({ ...response, products }));
    })
    .catch((error) => {
      dispatch(fetchProductsFailed(error));
    });
};

export const fetchProductsInit = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = (data) => ({
  type: success(FETCH_PRODUCTS),
  payload: data,
});

export const fetchProductsFailed = (error) => ({
  type: failed(FETCH_PRODUCTS),
  error,
});

export const setFilterByStyle = (filters = []) => ({
  type: SET_FILTERS_BY_STYLE,
  payload: filters,
});

export const setFilterByType = (filters = []) => ({
  type: SET_FILTERS_BY_TYPE,
  payload: filters,
});
