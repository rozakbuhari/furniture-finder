import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  setFilterByStyle,
  setFilterByType,
} from '../../redux/actions/products';
import { css } from '@emotion/core';

const animatedComponents = makeAnimated({ IndicatorSeparator: null });

const ProductFilter = ({ furnitureStyles = [], loading = true }) => {
  const dispatch = useDispatch();
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const deliveryTypes = [
    {
      label: '1 week',
      value: [0, 8],
    },
    {
      label: '2 week',
      value: [8, 15],
    },
    {
      label: '1 month',
      value: [15, 32],
    },
    {
      label: 'more',
      value: [32, Infinity],
    },
  ];

  const handleByStyleChange = (values) => {
    setSelectedStyles(values || []);
  };

  const handleByTypeChange = (values = []) => {
    setSelectedTypes(values || []);
  };

  const handleByStyleClose = () => {
    dispatch(setFilterByStyle(selectedStyles.map((s) => s.value)));
  };

  const handleByTypeClose = () => {
    dispatch(setFilterByType(selectedTypes.map((t) => t.value)));
  };

  return (
    <div
      css={css`
        display: flex;
      `}>
      <div
        css={css`
          flex: 1;
          padding: 10px;
        `}>
        <Select
          isMulti
          isLoading={loading}
          name="furnitureStyles"
          placeholder="Furniture Styles"
          value={selectedStyles}
          onChange={handleByStyleChange}
          onMenuClose={handleByStyleClose}
          options={furnitureStyles.map((s) => ({ label: s, value: s }))}
          className="basic-multi-select"
          classNamePrefix="select"
          closeMenuOnSelect={false}
          components={animatedComponents}
        />
      </div>
      <div
        css={css`
          flex: 1;
          padding: 10px;
        `}>
        <Select
          isMulti
          isLoading={loading}
          name="deliveryTypes"
          placeholder="Delivery Time"
          value={selectedTypes}
          onChange={handleByTypeChange}
          onMenuClose={handleByTypeClose}
          closeMenuOnSelect={false}
          options={deliveryTypes}
          className="basic-multi-select"
          classNamePrefix="select"
          components={animatedComponents}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
