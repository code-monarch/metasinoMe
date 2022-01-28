import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navigation.module.css";

const Navigation = () => {
  // CHANGE NAVBAR TRANSPARENCY ON SCROLL
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const [bottomBorder, setBottomBorder] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
    let bottomBorderVar = 0;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
      setBottomBorder(bottomBorderVar);
    }
else ( setBottomBorder( `1px solid rgba(255, 255, 255, 0.2)`) )
},[clientWindowHeight]);

  return (
    <>
      <nav
        className={`${styles.navbar}`}
        style={{
          background: `rgba(0, 0, 0, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
          borderBottom: bottomBorder,
        }}>
        <ul className={styles.NavigationList}>
          {/*  */}
          <li className={styles.NavigationItem}>
            <Link href='/#about'>About</Link>
          </li>
          {/*  */}
          <li className={styles.NavigationItem}>
            <Link href='/#roadmap'>Roadmap</Link>
          </li>
          {/*  */}
          <img className={styles.img} src='img/Metasino-logo.png' alt='logo' />
          {/*  */}
          <li className={styles.NavigationItem}>
            <Link href='/#tokenomics'>Tokenomics</Link>
          </li>
          {/*  */}
          {/*  */}
          <li className={styles.NavigationItem}>
            <a
              href='/whitepaper.pdf'
              target='_blank'
              rel='noopener noreferrer'>
              Litepaper
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
