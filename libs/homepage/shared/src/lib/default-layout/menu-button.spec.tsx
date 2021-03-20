import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import MenuButton from './menu-button';

describe('MenuButton', () => {
  it('should call onClick', () => {
    const onClick = jest.fn();
    render(<MenuButton onClick={onClick} />);
    fireEvent.click(screen.getByTestId('menu-button'));
    expect(onClick).toHaveBeenCalled();
  });
});
