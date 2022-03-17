import '../styles/globals.scss';
import {AppProps} from "next/app";
import React from 'react';
import Head from 'next/head';

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
