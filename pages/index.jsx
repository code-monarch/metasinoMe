import React, { useState } from "react";
import Head from "next/head";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import RoadMap from "@/components/RoadMap";
import Wwd from "@/components/Wwd";
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
        <link rel='shortcut icon' href='/MetasinoLogo.ico' />
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
      <Banner />
      <About id={"about"} />
      <RoadMap id={"roadmap"} />
      <Tokenomics id={"tokenomics"} />
      <Wwd />
      <Footer />
    </div>
  );
}
