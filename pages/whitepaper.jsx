import React from "react";
import Head from "next/head";
import styles from "../styles/Whitepaper.module.css";

const Whitepaper = () => {
  return (
    <div>
      <Head>
        <title>Metasino-the first truly decentralized Casino</title>
        <meta name='description' content='Metasino WhitePaper' />
        <link rel='shortcut icon' href='/MetasinoLogo.ico' />
      </Head>
      <div className={styles.container}>
          <h2 className={styles.h2}>Whitepaper is being updated...</h2>
      </div>
    </div>
  );
};

export default Whitepaper;
