import React from 'react';
import ProductItem from '../ProductItem';
import { css } from '@emotion/core';

const ProductList = ({ products = [], loading = true }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}>
      {loading
        ? 'Loading...'
        : products.map((p, i) => (
            <div
              key={i}
              css={css`
                flex: 0 0 50%;
                padding: 10px;
                @media (min-width: 768px) {
                  flex-basis: 25%;
                }
              `}>
              <ProductItem product={p} />
            </div>
          ))}
    </div>
  );
};

export default ProductList;
