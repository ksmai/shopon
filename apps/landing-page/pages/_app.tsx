import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/styles.css';
import Layout from '../components/shared/Layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shopon</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
