import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp<P>({
  Component,
  pageProps,
}: Pick<AppProps<P>, 'Component' | 'pageProps'>) {
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
