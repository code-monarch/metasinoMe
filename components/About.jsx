import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./about.module.css";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

import AOS from "aos";
import "aos/dist/aos.css";

const About = ({ id }) => {
  useEffect(() => {
       const wow = new WOW().init();
    AOS.init();
  }, []);
  // const { aboutData, id } = props;
  return (
    <>
      <section id={id} className={styles.container}>
        {/*  */}
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <img
              className={styles.casinoInMetaverse}
              src='CasinoInMetaverse.svg'
              alt=''
            />
            <h4 className={styles.abouth4}>More than just an idea</h4>
            <p>
              Metasino is a decentralized virtual casino built on the blockchain
              to be played in the Metaverse using the Metasino native token -
              $CASINO. Participants all around the world will come to Metasino
              to play different casino games and win redeemable rewards.
            </p>
            <p>
              Metasino implores creative game theory algorithms to ensure that
              all participants in metasino will abide by the community
              governance accordingly. Our unique staking and the locking
              mechanism will ensure all metasino players worth are valued
              properly. This ‘true worth’ will ensure decentralization is
              maintained and whales do not interfere.
            </p>
            <div className={styles.buttonGrp}>
              <Link href='https://t.me/MetasinoChat'>
                <a
                  className={styles.join}
                  target='_blank'
                  rel='noopener noreferrer'>
                  JOin Us
                </a>
              </Link>
              <a className={styles.whitepaper} href='/whitepaper.pdf'>
                Whitepaper
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.sandbox}>
          <div className={styles.sandboxLeft}>
            <img className={styles.sandboxImg} src='/img/land.jpg' alt='' />
          </div>
          <div className={styles.sandboxRight}>
            <h3>
              Metasino has acquired its first of many metaverse land on SANDBOX
            </h3>
            <h3 className={styles.coordinate}>sandbox land coordinates</h3>
            <h4 className={styles.landcoor}>lAND (-41, -132)</h4>
          </div>
        </div>
        <div className={styles.wwdcontainer}>
          <div className={styles.wwd}>
            <div
              className={`${
                styles.card
              } ${"wow animate__animated animate__flipInY"}`}>
              <h3 className={styles.wwdTitle}>Play-to-Earn</h3>
              <h4>
                Virtual casino games ranging from Blackjack, Poker, Big Six
                wheel, Slot machine, Craps, Roulette, Baccarat, Pool etc
              </h4>
            </div>
            <div
              className={`${
                styles.card
              } ${"wow animate__animated animate__flipInY"}`}>
              <h3 className={styles.wwdTitle}>Income-Generating NFTs</h3>
              <h4>
                Yield-bearing assets enabling you to earn revenue through fees
                collected from players. Imagine owning a Poker table, Slot
                machine in Las Vegas
              </h4>
            </div>
            <div
              className={`${
                styles.card
              } ${"wow animate__animated animate__flipInY"}`}>
              <h3 className={styles.wwdTitle}>Staking</h3>
              <h4>
                Metasino will have a single-asset staking for passive income
                generation. Yield farming will come later on as Metasino
                development progresses.
              </h4>
            </div>
            <div
              className={`${
                styles.card
              } ${"wow animate__animated animate__flipInY"}`}>
              <h3 className={styles.wwdTitle}>Social life & Gambling</h3>
              <h4>
                Virtual nightclub packed with stripclub, VIP lounge and a
                cocktail bar, and a virtual social park where individuals can
                meet, interact and catch fun using a Virtual Reality (VR)
                headset.
              </h4>
            </div>
            <div
              className={`${
                styles.card
              } ${"wow animate__animated animate__flipInY"}`}>
              <h3 className={styles.wwdTitle}>Metasino Properties</h3>
              <h4>
                Metasino Sandbox land coordinates are LAND (-41, -132).and much
                more to be announced on other metaverses (decantraland,
                polkacity...).
              </h4>
            </div>
          </div>
        </div>
        {/* PARTNERSHIP */}
        <div className={styles.partnership}>
          <div className={styles.partrow}>
            <div className={styles.partLeft}>
              <img
                className={styles.partLeftimg}
                src='/img/strategicPart.jpg'
                alt=''
              />
            </div>
            <div className={styles.partRight}>
              <h3>PARTY FOX PARTNERSHIP</h3>
              <p>
                Party fox are collections of composed 5999 pixelated originally
                designed fox. this is a skilk of foxes that does nothing but
                party all day.
              </p>
              <p>
                Owning a fox gives you access to their future events and shows
                worldwide where creators, collectors and investors will be in
                attendance. every fox collector will have access to their
                metaverse.
              </p>
              <p>
                With fox NFT, one would have access to play games in metasino,
                and with $casino you have access to party fox parties and
                events.
              </p>
              <p>
                You can swap fox for $casino, or earn fox as reward for games
                played in casino. you will be able to stake $casino to earn fox.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
