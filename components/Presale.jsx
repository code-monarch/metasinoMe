import React from "react";
import Link from "next/link";
import styles from "./presale.module.css";

const presale = ({id}) => {
  return (
    <div id={id} className={styles.container}>
      <div>
        <img className={styles.presale} src='presale.svg' alt='presale text' />
      </div>
      <div className={styles.presaleImgCont}>
        <img
          className={styles.img}
          src='/img/presale.jpg'
          alt='metasino logo'
        />
        {/* <img
          className={styles.img}
          src='/img/shillcontest.jpg'
          alt='metasino logo'
        /> */}
      </div>
      <ul>
        {/* <li>
          We are doing an IDO with <a href='https://Degem.io'>Degem</a>.
        </li> */}
        <li>
          We are having a presale with{" "}
          <a href='https://www.pinksale.finance/#/launchpad/0x4b68273fB474cd4318083D8BeaBFaBC8567695E6?chain=BSC'>
            PinkSale
          </a>{" "}
          <strong>on the 28th of January, 6PM UTC</strong>
        </li>
        <h4>
          Listing date is on the{" "}
          <strong> 1st of Febuary 6PM UTC</strong>
        </h4>
      </ul>
      <div>
        <a
          className={styles.joinPresale}
          href='https://www.pinksale.finance/#/launchpad/0x4b68273fB474cd4318083D8BeaBFaBC8567695E6?chain=BSC'
          target='_blank'
          rel='noreferrer'>
          Join Presale
        </a>
      </div>
      <h2>We will be Staking immediately at launch with high APR.</h2>
    </div>
  );
};

export default presale;
