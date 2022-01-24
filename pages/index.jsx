import React, { useState } from "react";
import Head from "next/head";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import RoadMap from "@/components/RoadMap";
import Presale from "@/components/Presale";
import Footer from "@/components/Footer";
import aboutData from "@/components/aboutData";
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
        <meta name='description' content='Play Casino in the Metaverse' />
        {/* <link rel='icon' href='/MetasinoLogo.ico' /> */}
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/img/Metasino-logo.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/img/Metasino-logo.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/img/Metasino-logo.png'
        />
      </Head>
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
      <About id={"about"} aboutData={aboutData} />
      <RoadMap id={"roadmap"} />
      <Tokenomics id={"tokenomics"} />
      <Presale id={"presale"} />
      <Footer />
    </div>
  );
}
