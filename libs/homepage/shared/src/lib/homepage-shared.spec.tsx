import React from 'react';
import { render } from '@testing-library/react';

import HomepageShared from './homepage-shared';

describe('HomepageShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomepageShared />);
    expect(baseElement).toBeTruthy();
  });
});
