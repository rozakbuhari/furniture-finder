import React from 'react';
import { css } from '@emotion/core';

const Input = (props) => {
  return (
    <input
      {...props}
      css={css`
        height: 30px;
        padding: 10px;
        outline: none;
        border: none;
        border-bottom: 2px solid darkgrey;
        width: 100%;
      `}
    />
  );
};

export default Input;
