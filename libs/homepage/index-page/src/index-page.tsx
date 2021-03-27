import React from 'react';

import './index-page.module.scss';
import { DefaultLayout, NavItem } from '@shopon/homepage/default-layout';

/* eslint-disable-next-line */
export interface IndexPageProps {
  navItems: NavItem[];
}

export function IndexPage({ navItems }: IndexPageProps) {
  return (
    <DefaultLayout navItems={navItems}>
      <h1>Welcome to IndexPage!</h1>
    </DefaultLayout>
  );
}

export default IndexPage;
