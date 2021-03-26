import React from 'react';
import Link from 'next/link';
import { Button, Layer, Box } from 'grommet';
import { Close } from 'grommet-icons';
import NavItem from './nav-item.interface';
import SideNavList from './side-nav-list';

import './side-nav.module.scss';

type OnClose = () => void;

export interface SideNavProps {
  open: boolean;
  onClose: OnClose;
  navItems: NavItem[];
}

export function SideNav({ open, onClose, navItems }: SideNavProps) {
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
      <Box fill style={{ width: '300px' }} as="nav">
        <Link href="/" passHref>
          <a href="/" onClick={onClose}>
            <span data-testid="side-nav-logo">TODO</span>
          </a>
        </Link>
        <Button
          data-testid="side-nav-close-button"
          onClick={onClose}
          icon={<Close />}
        />
        <SideNavList navItems={navItems} onClick={onClose} />
      </Box>
    </Layer>
  );
}

export default SideNav;
