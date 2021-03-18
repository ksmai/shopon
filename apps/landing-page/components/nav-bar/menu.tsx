import React from 'react';
import { css } from '@emotion/react';

import { ReactComponent as MenuIcon } from '../../public/menu-icon.svg';

/* eslint-disable-next-line */
export interface MenuProps {}

const menuIcon = css`
  width: 1.5rem;
  height: 1.5rem;
`;

const menuButton = css`
  padding: .5rem;
  background: none;
  border: none;
`;

export function Menu() {
  return (
    <button
      type="button"
      css={menuButton}
    >
      <MenuIcon css={menuIcon} />
    </button>
  );
}

export default Menu;
