import {
  FETCH_PRODUCTS,
  SET_FILTERS_BY_STYLE,
  SET_FILTERS_BY_TYPE,
} from '../constants';
import { success, failed } from '../utils';

const initialState = {
  products: [],
  loading: false,
  error: null,
  filtersByStyle: [],
  filtersByType: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true };
    case success(FETCH_PRODUCTS):
      return { ...state, products: action.payload.products, loading: false };
    case failed(FETCH_PRODUCTS):
      return { ...state, error: action.error, loading: false };
    case SET_FILTERS_BY_STYLE:
      return { ...state, filtersByStyle: action.payload };
    case SET_FILTERS_BY_TYPE:
      return { ...state, filtersByType: action.payload };
    default:
      return state;
  }
};

export default products;
