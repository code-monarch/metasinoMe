import React, { useEffect } from "react";
import styles from "./tokenomics.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const Tokenomics = ({id}) => {
  // INSTANTIATE WOW JS
  useEffect(() => {
    const wow = new WOW().init();
    AOS.init();
  }, []);
  return (
    <section id={id} className={styles.container}>
      <div className={styles.Tokenomics}>
        {/* <h1 className={styles.tokenomicstxt}>ROADMAP</h1> */}
        <img src='/tokenomics.svg' alt='' />
      </div>
    </section>
  );
};

export default Tokenomics;
