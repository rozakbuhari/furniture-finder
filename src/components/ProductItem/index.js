import React from 'react';
import { css, keyframes } from '@emotion/core';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MAX_CHAR = 114;

const ProductItem = ({ product }) => {
  const { name, price, description, delivery_time, furniture_style } = product;

  return (
    <div
      css={css`
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        animation: ${fadeIn} 1s ease-out both;

        p {
          margin-bottom: 16px;
        }
      `}>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          line-height: 26px;
          margin-bottom: 16px;
          h3 {
            margin-right: 8px;
          }

          h5 {
            color: #fe9e1c;
          }
        `}>
        <h3>{name}</h3>
        <h5>
          {new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          }).format(price)}
        </h5>
      </div>
      <p title={description}>
        {description.length > MAX_CHAR
          ? `${description.substr(0, MAX_CHAR)}...`
          : description}
      </p>
      <p
        css={css`
          color: #0f6cc8;
        `}>
        {furniture_style.join(', ')}
      </p>
      <div
        css={css`
          text-align: right;
          font-weight: 700;
          color: #0f6cc8;
        `}>
        {delivery_time} Days
      </div>
    </div>
  );
};

export default ProductItem;
