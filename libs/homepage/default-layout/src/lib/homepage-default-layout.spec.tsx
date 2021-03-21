import React from 'react';
import { render } from '@testing-library/react';

import HomepageDefaultLayout from './homepage-default-layout';

describe('HomepageDefaultLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomepageDefaultLayout />);
    expect(baseElement).toBeTruthy();
  });
});
