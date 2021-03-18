import React from 'react';
import { css } from '@emotion/react';

import Logo from '../shared/logo';
import { ReactComponent as MenuIcon } from '../../public/menu-icon.svg';
import LoginButton from './login-button';

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
  margin-left: auto;
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
      <button
        type="button"
        css={menuButton}
      >
        <MenuIcon css={menuIcon} />
      </button>
      <LoginButton css={loginButton} />
    </nav>
  );
}

export default NavBar;
