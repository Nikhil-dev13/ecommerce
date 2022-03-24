import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import LoginComponent from "../components/LoginComponent";

export default function Login() {


  return (
    <>
      <Head></Head>
      <Navbar />

    <LoginComponent />

      <Footer />
    </>
  );
}
