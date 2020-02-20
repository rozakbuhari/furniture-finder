import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import {
  getProductsLoading,
  getProductsByFilter,
} from '../../redux/selectors/products';
import {
  getFurnitureStyles,
  getFurnitureStylesLoading,
  getFurnitureStylesError,
} from '../../redux/selectors/furnitureStyles';
import ProductList from '../../components/ProductList';
import ProductFilter from '../../components/ProductFilter';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const productsLoading = useSelector(getProductsLoading);
  const products = useSelector(getProductsByFilter);
  const furnitureStyles = useSelector(getFurnitureStyles);
  const furnitureStylesLoading = useSelector(getFurnitureStylesLoading);
  const deliveryTypes = [
    {
      label: '1 week',
      value: [0, 8],
    },
    {
      label: '2 week',
      value: [8, 15],
    },
    {
      label: '1 month',
      value: [15, 32],
    },
    {
      label: 'more',
      value: [32, Infinity],
    },
  ];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ProductFilter
        loading={furnitureStylesLoading}
        furnitureStyles={furnitureStyles}
        deliveryTypes={deliveryTypes}
      />
      <ProductList products={products} loading={productsLoading} />
    </div>
  );
};

export default ProductsPage;
