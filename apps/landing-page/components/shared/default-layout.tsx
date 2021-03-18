import React from 'react';
import { css } from '@emotion/react';

import NavBar from '../nav-bar';

/* eslint-disable-next-line */
export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const header = css`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <header css={header}>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
    </>
  );
}

export default DefaultLayout;
