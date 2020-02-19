import React from 'react';
import Input from './components/Input';
import { css } from '@emotion/core';

const App = () => {
  return (
    <div
      css={css`
        color: yellowgreen;
      `}>
      <h1>Furniture Finder!</h1>
      <Input placeholder="Search Furniture" />
    </div>
  );
};

export default App;
