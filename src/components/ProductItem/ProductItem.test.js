import { render } from '@testing-library/react';
import ProductItem from './index';

describe('ProductItem component', () => {
  it('should render properly', () => {
    const productMock = {
      name: 'Product Name',
      price: 900000,
      description: 'Product description',
      delivery_time: 7,
      furniture_style: ['Style 1', 'Style 2'],
    };
    render(<ProductItem product={productMock} />);
  });
});
