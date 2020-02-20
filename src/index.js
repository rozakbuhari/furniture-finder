import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import store from './redux';
import Routes from './Routes';

ReactDOM.render(
  <Provider store={store}>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
      `}
    />
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
