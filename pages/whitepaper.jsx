import React from 'react';
import Head from "next/head";
import styles from "../styles/whitepaper.module.css";

const whitepaper = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Metasino-the first truly decentralized Casino</title>
        <meta name='description' content='Metasino Whitepaper' />
        {/* <link rel='icon' href='/MetasinoLogo.ico' /> */}
        <link rel='shortcut icon' href='/MetasinoLogo.ico' />
      </Head>
      <h2 className={styles.h2}>WHITEPAPER IS CURRENTLY BEING UPDATED</h2>
    </div>
  );
};

export default whitepaper;
