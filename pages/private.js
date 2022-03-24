import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PrivateComponent from "../components/PrivateComponent";

export default function Private() {

  return (
    <>
      <Head></Head>
      <Navbar />
      <PrivateComponent />
      <Footer />
    </>
  );
}
