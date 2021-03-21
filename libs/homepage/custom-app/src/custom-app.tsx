import React from 'react';
import { AppProps } from 'next/app';

import GrommetTheme from './grommet-theme';
import DefaultMetadata from './default-metadata';

type CustomAppProps<P> = Pick<AppProps<P>, 'Component' | 'pageProps'>;

function CustomApp<P>({ Component, pageProps }: CustomAppProps<P>) {
  return (
    <>
      <DefaultMetadata />
      <GrommetTheme>
        <Component {...pageProps} />
      </GrommetTheme>
    </>
  );
}

export default CustomApp;
