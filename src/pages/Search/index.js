import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import Layout from '../../components/Layout';
import { fetchProducts } from '../../redux/actions/products';
import {
  getProductsLoading,
  getProductsByFilter,
} from '../../redux/selectors/products';
import {
  getFurnitureStyles,
  getFurnitureStylesLoading,
} from '../../redux/selectors/furnitureStyles';
import ProductList from '../../components/ProductList';
import ProductFilter from '../../components/ProductFilter';

const SearchPage = () => {
  const dispatch = useDispatch();
  const productsLoading = useSelector(getProductsLoading);
  const products = useSelector(getProductsByFilter);
  const furnitureStyles = useSelector(getFurnitureStyles);
  const furnitureStylesLoading = useSelector(getFurnitureStylesLoading);
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    dispatch(fetchProducts(query.s));
  }, [query.s]);

  return (
    <Layout>
      <ProductFilter
        loading={furnitureStylesLoading}
        furnitureStyles={furnitureStyles}
      />
      <ProductList products={products} loading={productsLoading} />
    </Layout>
  );
};

export default SearchPage;
