import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '@shopon/shared/styles/base.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shopon</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
