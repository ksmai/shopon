import React from 'react';
import { render } from '@testing-library/react';

import MenuButton from './menu-button';

describe('MenuButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuButton />);
    expect(baseElement).toBeTruthy();
  });
});
