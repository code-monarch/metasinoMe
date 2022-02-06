import React, { useState, useEffect } from "react";
import Head from "next/head";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import RoadMap from "@/components/RoadMap";
import Footer from "@/components/Footer";
import Tokenomics from "@/components/Tokenomics";

import styles from "../styles/Home.module.css";

export default function Home() {
  // State for Dropdown menu
  const [dropMenuVisibility, setdropMenuVisibility] = useState(false);

  // State for hiding stuff
  const [hideMenuIcon, setHideMenuIcon] = useState(false);

  //  Dropdown states stored in a variable
  const hideDropdownMenu = () => setdropMenuVisibility(!dropMenuVisibility);

  const showMenuIcon = () => setHideMenuIcon(!hideMenuIcon);

  // Functions to handle dropdown
  // Toggle dropdown when hamburger menu is clicked
  const toggleDropdown = () => {
    hideDropdownMenu();
    if (hideDropdownMenu) {
      showMenuIcon();
    }
  };

  // clear sidebar when screen is touched when dropdown is visible
  const clearScreen = () => {
    if (hideMenuIcon) {
      toggleDropdown();
    } else if (!hideMenuIcon) {
      return;
    }
  };
  return (
    <div className={styles.container} onClick={clearScreen}>
      <Head>
        <title>Metasino-the first truly decentralized Casino</title>
        <meta
          name='description'
          content='Play Casino in the Metaverse | The First Truly Decentralized Casino'
        />
        {/* TWITTER CARD */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@MetaSinolive' />
        <meta name='twitter:creator' content='@MetaSinolive' />
        <meta
          name='twitter:title'
          content='Play Casino in the Metaverse | The First Truly Decentralized Casino'
        />
        <meta
          name='twitter:description'
          content='Metasino is a decentralized virtual casino built on the blockchain
              to be played in the Metaverse using the Metasino native token -
              $CASINO. Participants all around the world will come to Metasino
              to play different casino games and win redeemable rewards.'
        />
        <meta
          name='twitter:image'
          content='https://i.ibb.co/YWYp74d/Code-Monarch.jpg'
        />
        // FACEBOOK OG TAGS
        <meta property='og:site_name' content='codeMonarch' />
        <meta property='og:url' content='http://www.codemonarch.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Play Casino in the Metaverse | The First Truly Decentralized Casino'
        />
        <meta
          property='og:description'
          content='Metasino is a decentralized virtual casino built on the blockchain
              to be played in the Metaverse using the Metasino native token -
              $CASINO. Participants all around the world will come to Metasino
              to play different casino games and win redeemable rewards.'
        />
        <meta
          property='og:image'
          content='https://i.ibb.co/YWYp74d/Code-Monarch.jpg'
        />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:updated_time' content='updatedtime' />
        <meta property='og:image:width' content='300' />
        <meta property='og:image:height' content='300' />
        //FACEBOOK OG TAGS END //Size of image. Any size up to 300. Anything
        above 300px will not work in WhatsApp
        <link rel='icon' href='/MetasinoLogo.ico' />
        /* <link rel='shortcut icon' href='/MetasinoLogo.ico' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      {/*  */}

      <div className={hideMenuIcon ? styles.hideIcon : styles.menuIcon}>
        <i className='fas fa-bars fa-lg' onClick={toggleDropdown}></i>
      </div>
      <SideBar
        toggleDropdown={toggleDropdown}
        dropMenuVisibility={dropMenuVisibility}
        hideMenuIcon={hideMenuIcon}
      />
      <Navigation />
      <Banner id={"banner"} />
      <About id={"about"} />
      <RoadMap id={"roadmap"} />
      <Tokenomics id={"tokenomics"} />
      <Footer />
    </div>
  );
}
