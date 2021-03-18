import React from 'react';
import { css } from '@emotion/react';

import Logo from '../shared/logo';
import LoginButton from './login-button';
import MenuButton from './menu-button';

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

export function NavBar() {
  return (
    <nav css={nav}>
      <Logo css={logo} />
      <LoginButton css={loginButton} />
      <MenuButton />
    </nav>
  );
}

export default NavBar;
