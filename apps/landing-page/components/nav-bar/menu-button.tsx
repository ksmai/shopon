import React from 'react';
import { css } from '@emotion/react';

import { ReactComponent as MenuIcon } from '../../public/menu-icon.svg';

/* eslint-disable-next-line */
export interface MenuButtonProps {
  onClick: () => void;
}

const menuIcon = css`
  width: 1.5rem;
  height: 1.5rem;
`;

const menuButton = css`
  padding: .5rem;
  background: none;
  border: none;
`;

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      css={menuButton}
      data-testid="menu-button"
      onClick={onClick}
      type="button"
    >
      <MenuIcon css={menuIcon} />
    </button>
  );
}

export default MenuButton;
