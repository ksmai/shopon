import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Button, Layer, Box } from 'grommet';

import './side-nav.module.scss';

export interface NavLink {
  name: string;
  href: string;
}

export interface NavGroup {
  name: string;
  children: NavItem[];
}

export type NavItem = NavLink | NavGroup;

type OpenedNavs = Record<string, boolean>;
type ToggleNav = (name: string) => void;

export interface SideNavProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function SideNav({ open, onClose, navItems }: SideNavProps) {
  const [openedNavs, setOpenedNavs] = useState<OpenedNavs>({});
  const toggleNav: ToggleNav = useCallback(
    (name) => {
      setOpenedNavs({
        ...openedNavs,
        [name]: !openedNavs[name],
      });
    },
    [openedNavs, setOpenedNavs]
  );

  if (!open) {
    return null;
  }
  return (
    <Layer
      full="vertical"
      responsive={false}
      position="right"
      onClickOutside={onClose}
      onEsc={onClose}
    >
      <Box fill background="brand" style={{ width: '300px' }} as="nav">
        <Link href="/" passHref>
          <a href="/">
            <span data-testid="side-nav-logo">TODO</span>
          </a>
        </Link>
        <Button data-testid="close-button" onClick={onClose} />

        {renderNavItems(navItems, openedNavs, toggleNav)}
      </Box>
    </Layer>
  );
}

function renderNavItems(
  navItems: NavItem[],
  openedNavs: OpenedNavs,
  toggleNav: ToggleNav
): React.ReactNode {
  return navItems.map((navItem) => {
    if ('children' in navItem) {
      return (
        <React.Fragment key={navItem.name}>
          <button type="button" onClick={() => toggleNav(navItem.name)}>
            {navItem.name}
          </button>
          {openedNavs[navItem.name] &&
            renderNavItems(navItem.children, openedNavs, toggleNav)}
        </React.Fragment>
      );
    }

    return (
      <a href={navItem.href} key={navItem.name}>
        {navItem.name}
      </a>
    );
  });
}

export default SideNav;
