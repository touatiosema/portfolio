import Head from "next/head";
import NavBar from "../components/NavBar";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Osema TOUATI - Freshly graduated software engineer</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
