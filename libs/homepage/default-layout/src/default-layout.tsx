import React from 'react';

import './default-layout.module.scss';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      default layout works
      {children}
    </div>
  );
}

export default DefaultLayout;
