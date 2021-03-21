import React from 'react';
import { render, screen } from '@testing-library/react';

import DefaultLayout from './default-layout';

describe('DefaultLayout', () => {
  it('should render children', () => {
    const text = 'This is a child text node';
    const children = <span>{text}</span>;
    render(<DefaultLayout>{children}</DefaultLayout>);
    screen.getByText(text);
  });
});
