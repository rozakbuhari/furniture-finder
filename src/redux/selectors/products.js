import inRange from 'lodash.inrange';

export const getProducts = (state) => state.products.products;

export const getProductsLoading = (state) => state.products.loading;

export const getProductsError = (state) => state.products.error;

export const getProductsByFilter = ({ products: productsState }) => {
  let {
    products = [],
    filtersByStyle = [],
    filtersByType = [],
  } = productsState;

  if (filtersByStyle.length > 0) {
    products = products.filter((p) =>
      p.furniture_style.some((s) => filtersByStyle.indexOf(s) > -1)
    );
  }

  if (filtersByType.length > 0) {
    products = products.filter((p) =>
      filtersByType.some((t) => inRange(p.delivery_time, ...t))
    );
  }

  return products;
};
