import React from 'react';
import { css } from '@emotion/react';
import Img from 'react-optimized-image';

import MenuIconSrc from '@shopon/shared/assets/menu-icon.svg';

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
      <Img
        src={MenuIconSrc}
        alt="menu"
        css={menuIcon}
      />
    </button>
  );
}

export default MenuButton;
