import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main>
      <h1>Welcome to default-layout!</h1>
      {children}
    </main>
  );
}

export default DefaultLayout;
