import React from 'react';
import { css } from '@emotion/core';

const Header = (props) => {
  return (
    <h1
      css={css`
        color: darkblue;
      `}>
      Furniture Finder
    </h1>
  );
};

export default Header;
