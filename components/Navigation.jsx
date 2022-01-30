import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css";

const Navigation = () => {

  // useEffect(() => {
  //   let backgroundTransparacyVar = clientWindowHeight / 600;
  //   let bottomBorderVar = 0;

  //   if (backgroundTransparacyVar < 1) {
  //     let paddingVar = 30 - backgroundTransparacyVar * 20;
  //     let boxShadowVar = backgroundTransparacyVar * 0.1;
  //     setBackgroundTransparacy(backgroundTransparacyVar);
  //     setPadding(paddingVar);
  //     setBoxShadow(boxShadowVar);
  //     setBottomBorder(bottomBorderVar);
  //   } else setBottomBorder(`1px solid rgba(255, 255, 255, 0.2)`);
  // }, [clientWindowHeight]);

  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.navbar}`}>
          <div>
            <a href="/#banner">
            <img className={styles.img} src='/metasino.svg' alt='logo' />
            </a>
          </div>
          {/*  */}
          <ul className={styles.NavigationList}>
            {/*  */}
            <li className={styles.NavigationItem}>
              <a
                href='https://www.pinksale.finance/#/launchpad/0x01FC371394E2C552C4920CF0521611A7b1592877?chain=BSC'
                target='_blank'
                rel='noreferrer'>
                Presale
              </a>
            </li>
            {/*  */}
            <li className={styles.NavigationItem}>
              <Link href='/#roadmap'>Roadmap</Link>
            </li>
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
                Whitepaper
              </a>
            </li>
            <div className={styles.telegram}>
              <a href='t.me/MetasinoChat' target='_blank' rel='noreferrer'>
                <i className='fab fa-telegram fa-lg'></i>
              </a>
            </div>
            <div className={styles.facebook}>
              <a href=''>
                <i className='fab fa-facebook fa-lg'></i>
              </a>
            </div>
            <div className={styles.instagram}>
              <a href=''>
                <i className='fab fa-instagram fa-lg'></i>
              </a>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
