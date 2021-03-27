import React from 'react';
import Link from 'next/link';
import { Button, Layer, Box, Header } from 'grommet';
import { Close } from 'grommet-icons';
import NavItem from './nav-item.interface';
import SideNavList from './side-nav-list';

import './side-nav.module.scss';
import SiteLogo from '../site-logo';

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
      <Box fill="vertical" pad="large" width="320px" overflow="auto">
        <Header pad={{ vertical: 'medium' }} border={{ side: 'bottom' }}>
          <Link href="/" passHref>
            <a href="/" onClick={onClose}>
              <SiteLogo data-testid="side-nav-logo" />
            </a>
          </Link>
          <Button
            data-testid="side-nav-close-button"
            onClick={onClose}
            icon={<Close />}
          />
        </Header>
        <SideNavList navItems={navItems} onClick={onClose} />
      </Box>
    </Layer>
  );
}

export default SideNav;
