import React from 'react';
import { render } from '@testing-library/react';

import SiteLogo from './site-logo';

describe('SiteLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiteLogo />);
    expect(baseElement).toBeTruthy();
  });
});
