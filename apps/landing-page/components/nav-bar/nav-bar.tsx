import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

import Logo from '../shared/logo';
import { ReactComponent as MenuIcon } from '../../public/menu-icon.svg';

/* eslint-disable-next-line */
export interface NavBarProps {}

const nav = css`
  padding: 1.25rem;
  display: flex;
  align-items: center;
`;

const logo = css`
  width: 8rem;
`;

const loginButton = css`
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  color: inherit;
  text-decoration: none;
  margin-left: auto;

  &:active,
  &:focus,
  &:hover {
    opacity: .5;
  }
`;

const menuButton = css`
  padding: .5rem;
  background: none;
  border: none;
`;

const menuIcon = css`
  width: 1.5rem;
  height: 1.5rem;
`;

export function NavBar() {
  return (
    <nav css={nav}>
      <Logo css={logo} />
      <Link href="/login" passHref>
        <a href="-" css={loginButton}>Log in</a>
      </Link>
      <button
        type="button"
        css={menuButton}
      >
        <MenuIcon css={menuIcon} />
      </button>
    </nav>
  );
}

export default NavBar;
