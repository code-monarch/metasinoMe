import React, {useEffect} from 'react'
import styles from "./tokenomics.module.css";

import { Flex, VStack, Box, Text } from "@chakra-ui/react";

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
      <h3>Total supply : 2,000,000,000</h3>
      {/* <VStack marginBottom={10} color='#fff'>
        <Flex>
          <Text>
            Private sale: 1BNB = 1,212,500 $casino token <br /> 2BNB = 2,425,000
            $casino token
          </Text>
        </Flex>
        <Flex>
          <Text>
            Public sale: 1BNB = 732,075 $casino token <br /> 2BNB = 1,464,150
            $casino token
          </Text>
        </Flex>
      </VStack> */}
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
            collected from players.Imagine owning a Poker table, Slot machine in Las Vegas
          </p>
        </div>
        {/* THIRD CARD */}
        <div
          className={`${styles.card3} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='370ms'>
          <h3>Staking</h3>
          <p>
            {" "}
            Metasino will have a single-asset staking for passive income
            generation. Yield farming will come later on as Metasino development
            progresses.
          </p>
        </div>
        {/* FOURTH CARD
        <div
          className={`${styles.card4} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='170ms'>
          <h3>Team/Advisors</h3>
          <p> 10%</p>
          <p>200,000,000</p>
        </div> */}
        {/* FIFTH CARD */}
        <div
          className={`${styles.card5} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='370ms'>
          <h3>Social life & Gambling</h3>
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
}

export default Tokenomics
