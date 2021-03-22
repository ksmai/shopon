import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import './mock-next-link';
import SideNavLink from './side-nav-link';
import Link from './link.interface';

describe('SideNavLink', () => {
  let link: Link;
  let onClick: () => void;

  beforeEach(() => {
    link = {
      name: 'Link Name',
      href: '/test-href',
    };
    onClick = jest.fn<undefined, []>();
    render(<SideNavLink link={link} onClick={onClick} />);
  });

  it('should render name', () => {
    screen.getByText(link.name);
  });

  it('should render an anchor with href', () => {
    const a = screen.getByText(link.name).closest('a');
    expect(a).toHaveAttribute('href', link.href);
  });

  it('should call onClick when clicked', () => {
    const el = screen.getByText(link.name);
    fireEvent.click(el);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
