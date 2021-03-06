import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Header, Anchor, Button, Box } from 'grommet';
import { Menu } from 'grommet-icons';

import styles from './default-layout.module.scss';
import SideNav from './side-nav/side-nav';
import SiteLogo from './site-logo';
import NavItem from './side-nav/nav-item.interface';

export interface DefaultLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
}

export function DefaultLayout({ children, navItems }: DefaultLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), [setIsMenuOpen]);
  const closeMenu = useCallback(() => setIsMenuOpen(false), [setIsMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <Header pad="medium" as="nav">
          <Box flex="grow">
            <SiteLogo className={styles.logo} />
          </Box>
          <Link href="/log-in" passHref>
            <Anchor
              data-testid="main-login-button"
              color="dark-1"
              href="#"
              label="Log in"
            />
          </Link>
          <Button icon={<Menu />} onClick={openMenu} />
        </Header>
      </header>
      <SideNav open={isMenuOpen} onClose={closeMenu} navItems={navItems} />
      {children}
    </>
  );
}

export default DefaultLayout;
