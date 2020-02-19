import { FETCH_PRODUCTS } from '../constants';
import { success, failed } from '../utils';

const initialState = {
  furnitureStyles: [],
  loading: false,
  error: null,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true };
    case success(FETCH_PRODUCTS):
      return {
        ...state,
        furnitureStyles: action.payload.furniture_styles,
        loading: false,
      };
    case failed(FETCH_PRODUCTS):
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default products;
