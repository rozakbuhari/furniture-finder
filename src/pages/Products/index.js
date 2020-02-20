import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const ProductsPage = () => {
  const dispatch = useDispatch();
  const productsLoading = useSelector(getProductsLoading);
  const products = useSelector(getProductsByFilter);
  const furnitureStyles = useSelector(getFurnitureStyles);
  const furnitureStylesLoading = useSelector(getFurnitureStylesLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <ProductFilter
        loading={furnitureStylesLoading}
        furnitureStyles={furnitureStyles}
      />
      <ProductList products={products} loading={productsLoading} />
    </div>
  );
};

export default ProductsPage;
