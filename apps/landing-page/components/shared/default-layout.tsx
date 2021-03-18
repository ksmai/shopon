import React from 'react';
import styled from '@emotion/styled';

import NavBar from '../nav-bar';

/* eslint-disable-next-line */
export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <StickyHeader>
        <NavBar />
      </StickyHeader>
      <main>
        {children}
      </main>
    </>
  );
}

export default DefaultLayout;
