import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SideNavLink from './side-nav-link';

interface MockLinkProps {
  children: React.ReactNode;
}
jest.mock('next/link', () => ({ children }: MockLinkProps) => children);

describe('SideNavLink', () => {
  let name: string;
  let href: string;
  let onClick: () => void;

  beforeEach(() => {
    name = 'Link Name';
    href = '/test-href';
    onClick = jest.fn<undefined, []>();
    render(<SideNavLink name={name} href={href} onClick={onClick} />);
  });

  it('should render name', () => {
    screen.getByText(name);
  });

  it('should render an anchor with href', () => {
    const a = screen.getByText(name).closest('a');
    expect(a).toHaveAttribute('href', href);
  });

  it('should call onClick when clicked', () => {
    const el = screen.getByText(name);
    fireEvent.click(el);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
