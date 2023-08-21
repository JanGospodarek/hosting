import type { AppProps } from "next/app";

import "../styles/global.css";
import Head from "next/head";
import { Metadata } from "next";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head> */}
      <main className="font-raleway">
        <Component {...pageProps} />
      </main>
    </>
  );
}
