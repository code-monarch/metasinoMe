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
      <h3>total supply : 3,000,000,000</h3>
      <h3>Listing price : $0.0008</h3>
      <h3>Private sale : $0.00032</h3>
      <h3>Public sale : $0.00053</h3>
      <VStack marginBottom={10} color='#fff'>
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
      </VStack>
      <div className={styles.row}>
        <div
          className={`${styles.card1} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}>
          <h3>Play to Earn(P2E)</h3>
          <p> 35%</p>
          <p>700,000,000</p>
        </div>
        {/* SECOND CARD */}
        <div
          className={`${styles.card2} ${
            styles.packageCards
          } ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='470ms'>
          <h3>Staking/Rewards</h3>
          <p> 12%</p>
          <p>300,000,000</p>
        </div>
        {/* THIRD CARD */}
        <div
          className={`${styles.card3} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='370ms'>
          <h3>LP.</h3>
          <p> 5%</p>
          <p>100,000,000</p>
        </div>
        {/* FOURTH CARD */}
        <div
          className={`${styles.card4} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='170ms'>
          <h3>Team/Advisors</h3>
          <p> 10%</p>
          <p>200,000,000</p>
        </div>
        {/* FIFTH CARD */}
        <div
          className={`${styles.card5} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='370ms'>
          <h3>Marketing</h3>
          <p> 10%</p>
          <p>200,000,000</p>
        </div>
        {/* SIXTH CARD */}
        <div
          className={`${styles.card6} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='570ms'>
          <h3>Presale</h3>
          <p> 25%</p>
          <p>500,000,000</p>
        </div>
        <div
          className={`${styles.card7} ${
            styles.packageCards
          }  ${"wow animate__animated animate__flipInY"}`}
          data-wow-delay='270ms'>
          <h3>Airdrop</h3>
          <p> 3%</p>
          <p>60,000,000</p>
        </div>
      </div>
      <h2>8.3% from presale is vested</h2>
      <h2>Estimated market cap: $395,244</h2>
    </section>
  );
}

export default Tokenomics
