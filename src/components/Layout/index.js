import React from 'react';
import { css } from '@emotion/core';

const Layout = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 1200px;
        padding: 16px;
        margin: 0 auto;
      `}>
      {children}
    </div>
  );
};

export default Layout;
