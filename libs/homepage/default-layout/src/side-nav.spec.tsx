import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SideNav, { NavItem, NavLink } from './side-nav';

interface MockLinkProps {
  children: React.ReactNode;
}
jest.mock('next/link', () => ({ children }: MockLinkProps) => children);

interface TwoLevelLink {
  name: string;
  children: [NavLink];
}

interface ThreeLevelLink {
  name: string;
  children: [TwoLevelLink];
}

describe('SideNav', () => {
  let onClose: () => void;
  let oneLevelLink: NavLink;
  let twoLevelLink: TwoLevelLink;
  let twoLevelLink2: NavLink;
  let threeLevelLink: ThreeLevelLink;
  let threeLevelLink2: TwoLevelLink;
  let threeLevelLink3: NavLink;
  let navItems: NavItem[];

  beforeEach(() => {
    onClose = jest.fn<void, []>();
    oneLevelLink = { name: 'oneLevelLink', href: 'one-level-link' };
    twoLevelLink2 = { name: 'twoLevelLink2', href: 'two-level-link-2' };
    twoLevelLink = {
      name: 'twoLevelLink',
      children: [twoLevelLink2],
    };
    threeLevelLink3 = { name: 'threeLevelLink3', href: 'three-level-link-3' };
    threeLevelLink2 = {
      name: 'threeLevelLink2',
      children: [threeLevelLink3],
    };
    threeLevelLink = {
      name: 'threeLevelLink',
      children: [threeLevelLink2],
    };

    navItems = [oneLevelLink, twoLevelLink, threeLevelLink];
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

    it('should render one level nav item', () => {
      const navItem = screen.getByText(oneLevelLink.name);
      expect(navItem.closest('a')).toHaveAttribute('href', oneLevelLink.href);
    });

    it('should expand two level nav item on click', async () => {
      const firstLevel = screen.getByText(twoLevelLink.name);
      let secondLevel = screen.queryByText(twoLevelLink2.name);
      expect(secondLevel).toBeNull();
      fireEvent.click(firstLevel);
      secondLevel = await screen.findByText(twoLevelLink2.name);
      expect(secondLevel.closest('a')).toHaveAttribute(
        'href',
        twoLevelLink2.href
      );
    });

    it('should expand three level nav item on click', async () => {
      const firstLevel = screen.getByText(threeLevelLink.name);

      let secondLevel = screen.queryByText(threeLevelLink2.name);
      expect(secondLevel).toBeNull();
      fireEvent.click(firstLevel);
      secondLevel = await screen.findByText(threeLevelLink2.name);

      let thirdLevel = screen.queryByText(threeLevelLink3.name);
      expect(thirdLevel).toBeNull();
      fireEvent.click(secondLevel);
      thirdLevel = await screen.findByText(threeLevelLink3.name);

      expect(thirdLevel.closest('a')).toHaveAttribute(
        'href',
        threeLevelLink3.href
      );
    });

    it('should call onClose when a link is clicked', () => {
      const link = screen.getByText(oneLevelLink.name);
      fireEvent.click(link);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
