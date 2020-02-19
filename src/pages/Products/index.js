import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import {
  getProductsLoading,
  getProducts,
  getProductsError,
} from '../../redux/selectors/products';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getProductsLoading);
  const products = useSelector(getProducts);
  const error = useSelector(getProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      css={css`
        color: yellowgreen;
      `}>
      <h2>Product List</h2>
      <ul>
        {loading
          ? 'Loading...'
          : products.map((p) => <li>{JSON.stringify(p)}</li>)}
      </ul>
    </div>
  );
};

export default ProductsPage;
