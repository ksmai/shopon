import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import GrommetTheme from './grommet-theme';

type CustomAppProps<P> = Pick<AppProps<P>, 'Component' | 'pageProps'>;

function CustomApp<P>({ Component, pageProps }: CustomAppProps<P>) {
  return (
    <>
      <Head>
        <title>Shopon</title>
      </Head>
      <GrommetTheme>
        <Component {...pageProps} />
      </GrommetTheme>
    </>
  );
}

export default CustomApp;
