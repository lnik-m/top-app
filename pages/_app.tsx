import {AppProps} from "next/app";
import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return (<>
    <Head>
      <title>My top-app</title>
    </Head>
    <Component {...pageProps}/>
  </>
  );
}

export default MyApp;
