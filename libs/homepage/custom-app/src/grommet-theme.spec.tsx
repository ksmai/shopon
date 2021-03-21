import React from 'react';
import { render } from '@testing-library/react';

import GrommetTheme from './grommet-theme';

describe('GrommetTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrommetTheme />);
    expect(baseElement).toBeTruthy();
  });
});
