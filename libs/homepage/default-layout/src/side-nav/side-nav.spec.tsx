import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import './mock-next-link';
import SideNav from './side-nav';
import NavItem from './nav-item.interface';

describe('SideNav', () => {
  let onClose: () => void;
  let navItems: NavItem[];

  beforeEach(() => {
    onClose = jest.fn<void, []>();
    navItems = [{ name: 'Log in', href: '/log-in' }];
  });

  describe('when not open', () => {
    beforeEach(() => {
      render(<SideNav open={false} onClose={onClose} navItems={navItems} />);
    });

    it('should not render logo', () => {
      const logo = screen.queryByTestId('side-nav-logo');
      expect(logo).toBeNull();
    });

    it('should not render close button', () => {
      const closeButton = screen.queryByTestId('side-nav-close-button');
      expect(closeButton).toBeNull();
    });

    it('should not render navItems', () => {
      const navItem = screen.queryByText(navItems[0].name);
      expect(navItem).toBeNull();
    });
  });

  describe('when open', () => {
    beforeEach(() => {
      render(<SideNav open={true} onClose={onClose} navItems={navItems} />);
    });

    it('should point logo to homepage', () => {
      const logo = screen.getByTestId('side-nav-logo');
      expect(logo.closest('a')).toHaveAttribute('href', '/');
    });

    it('should call onClose when logo is clicked', () => {
      const logo = screen.getByTestId('side-nav-logo');
      fireEvent.click(logo);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('should call onClose on clicking close button', () => {
      const closeButton = screen.getByTestId('side-nav-close-button');
      fireEvent.click(closeButton);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('should render nav item', () => {
      screen.getByText(navItems[0].name);
    });

    it('should call onClose when a link is clicked', () => {
      const link = screen.getByText(navItems[0].name);
      fireEvent.click(link);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
