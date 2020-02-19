import React from 'react';
import { Route } from 'react-router-dom';
import ProductsPage from './pages/Products';
import SearchPage from './pages/Search';
import Header from './components/Header';

const Routes = () => {
  return (
    <div>
      <Header />
      <Route path="/" exact>
        <ProductsPage />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
    </div>
  );
};

export default Routes;
