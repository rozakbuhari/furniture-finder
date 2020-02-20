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
        padding: 20px 10px;
        margin: 0;
        width: 50%;
      `}>
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
