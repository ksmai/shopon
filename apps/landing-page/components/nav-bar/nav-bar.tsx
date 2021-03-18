import React from 'react';
import { css } from '@emotion/react';

import Logo from '../shared/logo';

/* eslint-disable-next-line */
export interface NavBarProps {}

const nav = css`
  padding: 20px 20px;
  display: flex;
  align-items: center;
`;

const logo = css`
  width: 128px;
`;

export function NavBar() {
  return (
    <nav css={nav}>
      <Logo css={logo} />
    </nav>
  );
}

export default NavBar;
