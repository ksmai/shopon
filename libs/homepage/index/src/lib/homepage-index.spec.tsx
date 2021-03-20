import React from 'react';
import { render } from '@testing-library/react';

import HomepageIndex from './homepage-index';

describe('HomepageIndex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomepageIndex />);
    expect(baseElement).toBeTruthy();
  });
});
