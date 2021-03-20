import React from 'react';
import { render } from '@testing-library/react';

import CustomApp from './custom-app';

describe('CustomApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomApp />);
    expect(baseElement).toBeTruthy();
  });
});
