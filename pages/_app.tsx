import type { AppProps } from "next/app";

import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="font-raleway overflow-x-hidden">
        <Component {...pageProps} />
      </main>
    </>
  );
}
