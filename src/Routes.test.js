import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';

describe('Routes', () => {
  test('should render properly inside Router', () => {
    render(
      <HashRouter>
        <Routes />
      </HashRouter>
    );
  });
});
