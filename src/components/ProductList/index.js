import React from 'react';

const ProductList = ({ products = [], loading = true }) => {
  return (
    <ul>
      {loading
        ? 'Loading...'
        : products.map((p, i) => <li key={i}>{JSON.stringify(p)}</li>)}
    </ul>
  );
};

export default ProductList;
