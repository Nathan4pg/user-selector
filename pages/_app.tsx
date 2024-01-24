// pages/_app.js or pages/_app.tsx
import "../app/globals.css";
import RootLayout from "../app/layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
