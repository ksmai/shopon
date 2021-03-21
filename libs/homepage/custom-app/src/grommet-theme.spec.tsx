import React from 'react';
import { render, screen } from '@testing-library/react';

import GrommetTheme from './grommet-theme';

describe('GrommetTheme', () => {
  it('should render children', () => {
    const children = 'This is a child text node';
    render(<GrommetTheme>{children}</GrommetTheme>);
    screen.getByText(children);
  });
});
