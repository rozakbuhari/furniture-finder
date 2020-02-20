import React from 'react';
import { css } from '@emotion/core';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import Input from '../Input';

const Header = () => {
  const history = useHistory();

  const handleSearch = ({ search }) => {
    history.replace({ pathname: '/search', search: `?s=${search}` });
  };

  return (
    <header
      css={css`
        width: 100%;
        max-width: 1200px;
        padding: 16px;
        margin: 0 auto;

        h1 {
          text-decoration: underline;
          font-weight: 400;

          strong {
            font-weight: 700;
          }
        }

        form {
          margin-top: 36px;
          width: 400px;
        }
      `}>
      <h1>
        Furniture <strong>Finder</strong>
      </h1>
      <Formik initialValues={{ search: '' }} onSubmit={handleSearch}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Search Furniture"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.search}
              name="search"
            />
          </form>
        )}
      </Formik>
    </header>
  );
};

export default Header;
