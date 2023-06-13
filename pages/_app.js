import Footer from "@/components/Footer";
import Header from "@/components/Header";
import store from "@/store/store";
import { Provider } from "react-redux";
import "@/styles/globals.sass";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>s.Flower</title>
        <meta name="description" content="Shop Flower Online " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
