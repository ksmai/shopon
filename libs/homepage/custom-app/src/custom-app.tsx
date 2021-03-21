import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

type CustomAppProps<P> = Pick<AppProps<P>, 'Component' | 'pageProps'>;

function CustomApp<P>({ Component, pageProps }: CustomAppProps<P>) {
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
