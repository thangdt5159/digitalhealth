import type { AppProps } from "next/app";
import Header from "../components/Header";
import "../index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
