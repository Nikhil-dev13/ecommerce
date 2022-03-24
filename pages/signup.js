import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import SignUpComponent from "../components/SignUpComponent";

export default function Signup() {
  return (
    <>
      <Head></Head>
      <Navbar />

        <SignUpComponent />

      <Footer />
    </>
  );
}