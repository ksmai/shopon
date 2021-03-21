import React from 'react';

import './index-page.module.scss';
import { DefaultLayout } from '@shopon/homepage/default-layout';

/* eslint-disable-next-line */
export interface IndexPageProps {}

export function IndexPage(props: IndexPageProps) {
  return (
    <DefaultLayout>
      <h1>Welcome to IndexPage!</h1>
    </DefaultLayout>
  );
}

export default IndexPage;
