import React, { useEffect } from "react";
import styles from "./tokenomics.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const Tokenomics = ({ id }) => {
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
        src='/tokenomics.svg'alt=''
      />
      <h3>Total supply : 2,000,000,000</h3>
      <div className={styles.row}>
        <div
          className={`${styles.card1} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}>
          <h3>Play to Earn(P2E)</h3>
          <p>
            virtual casino games ranging from Blackjack, Poker, Big Six wheel,
            Slot machine, Craps, Roulette, Baccarat, Pool etc
          </p>
        </div>
        {/* SECOND CARD */}
        <div
          className={`${styles.card2} ${
            styles.packageCards
          } ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='470ms'>
          <h3>Staking/Rewards</h3>
          <p>
            yield-bearing assets enabling you to earn revenue through fees
            collected from players.Imagine owning a Poker table, Slot machine in
            Las Vegas
          </p>
        </div>
     
        <div
          className={`${styles.card3} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='370ms'>
          <h3>Staking</h3>
          <p>
            Metasino will have a single-asset staking for passive income
            generation. Yield farming will come later on as Metasino development
            progresses.
          </p>
        </div>

        <div
          className={`${styles.card5} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='370ms'>
          <h3>Social life and Gambling</h3>
          <p>
            virtual nightclub packed with stripclub, VIP lounge and a cocktail
            bar, and a virtual social park where individuals can meet, interact
            and catch fun using a Virtual Reality (VR) headset.
          </p>
        </div>
        {/* SIXTH CARD */}
        <div
          className={`${styles.card6} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='570ms'>
          <h3>Metasino Properties</h3>
          <p>
            Metasino's Sandbox land coordinates are LAND (-41, -132).and much
            more to be announced on other metaverses (decentraland,
            polkacity...).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
