import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shopon</title>
      </Head>

      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
