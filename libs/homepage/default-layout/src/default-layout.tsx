import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Header, Anchor, Button } from 'grommet';
import { Menu } from 'grommet-icons';

import styles from './default-layout.module.scss';
import SideNav from './side-nav/side-nav';
import getNavItems from './get-nav-items';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const navItems = getNavItems();

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), [setIsMenuOpen]);
  const closeMenu = useCallback(() => setIsMenuOpen(false), [setIsMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <Header pad="medium" as="nav">
          <div className={styles['logo-wrapper']}></div>
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
