import React, {useEffect} from 'react'
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
      <img
        className={`${
          styles.tokenomics
        } ${"wow animate__animated animate__jackInTheBox"}`}
        src='/tokenomics.svg'
        alt=''
      />
      <div className={styles.row}>
        <div
          className={`${styles.card1} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}>
          <h3>Play to Earn(P2E)</h3>
          <p> 40%</p>
          <p>250,000,000</p>
        </div>
        {/* SECOND CARD */}
        <div
          className={`${styles.card2} ${
            styles.packageCards
          } ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='470ms'>
          <h3>Staking/Rewards</h3>
          <p> 15%</p>
          <p>75,000,000</p>
        </div>
        {/* THIRD CARD */}
        <div
          className={`${styles.card3} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='370ms'>
          <h3>LP.</h3>
          <p> 2%</p>
          <p>10,000,000</p>
        </div>
        {/* FOURTH CARD */}
        <div
          className={`${styles.card4} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='170ms'>
          <h3>Team/Advisors</h3>
          <p> 10%</p>
          <p>50,000,000</p>
        </div>
        {/* FIFTH CARD */}
        <div
          className={`${styles.card5} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='370ms'>
          <h3>Marketing</h3>
          <p> 10%</p>
          <p>50,000,000</p>
        </div>
        {/* SIXTH CARD */}
        <div
          className={`${styles.card6} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='570ms'>
          <h3>Presale</h3>
          <p> 20%</p>
          <p>100,000,000</p>
        </div>
        <div
          className={`${styles.card7} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='270ms'>
          <h3>Airdrop</h3>
          <p> 3%</p>
          <p>15,000,000</p>
        </div>
      </div>
      {/* <h2>We will be Staking immediately at launch with high APR.</h2> */}
    </section>
  );
}

export default Tokenomics
