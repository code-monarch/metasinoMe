import React from "react";
import Link from "next/link";
import styles from "./presale.module.css";

const presale = ({id}) => {
  return (
    <div id={id} className={styles.container}>
      <div>
        <img className={styles.presale} src='presale.svg' alt='presale text' />
      </div>
      <ul>
        {/* <li>
          We are doing an IDO with <a href='https://Degem.io'>Degem</a>.
        </li> */}
        <li>
          We are having a presale with
          <a href='https://nftmagic.app/#'> Peanut Butter, </a>
          on the 24th of January. 6PM UTC
        </li>
        <h4>Listing date is on the 24th of January</h4>
      </ul>
      <div>
        <a
          className={styles.joinPresale}
          href='https://t.me/MetasinoChat'
          target='_blank'
          rel='noreferrer'>
          Join Presale
        </a>
      </div>
      <h2>We will be Staking immediately at launch with high APR.</h2>
      <div className={styles.presaleImgCont}>
        <img
          className={styles.img}
          src='/img/presaleImg.jpg'
          alt='metasino logo'
        />
        <img
          className={styles.img}
          src='/img/shillcontest.jpg'
          alt='metasino logo'
        />
      </div>
    </div>
  );
};

export default presale;
