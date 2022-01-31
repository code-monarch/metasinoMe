import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./banner.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

function Banner() {
  // INSTANTIATE WOW JS
  useEffect(() => {
    const wow = new WOW().init();
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.col2}>
        {/* <div>
          <img
            data-wow-delay='470ms'
            className={`${
              styles.metasinoLogo
            } ${"wow animate__animated animate__fadeInDown"}`}
            src='/img/Metasino-logo.png'
            alt='metasino logo'
          />
        </div> */}
        <div>
          <img
            className={`${
              styles.welcomeTo
            } ${"wow animate__animated animate__flipInX"}`}
            src='welcomeTo.svg'
            alt='welcome to'
          />
        </div>

        <div>
          <img
            data-wow-delay='370ms'
            className={`${
              styles.metasinoTxt
            } ${"wow animate__animated animate__jackInTheBox"}`}
            src='/metasino.svg'
            alt=''
          />
        </div>
        <div
          data-wow-delay='670ms'
          className={`${
            styles.content
          } ${"wow animate__animated animate__zoomInRight"}`}>
          <div className={styles.sliderWrapper}>
            <div className={styles.slider}>
              <div className={styles.sliderText1}>
                In The first truly decentralized Casino
              </div>
              <div className={styles.sliderText2}>Play to win</div>
              <div className={styles.sliderText3}>Play with us</div>
              <div className={styles.sliderText4}>
                Best games in the metaverse
              </div>
              <div className={styles.sliderText5}>
                How do you play? come here
              </div>
              <div className={styles.sliderText6}>A different Feeling</div>
              <div className={styles.sliderText7}>
                In the first truly decenralized Casino
              </div>
            </div>
          </div>
        </div>
        <div
          data-wow-delay='1000ms'
          className={"wow animate__animated animate__fadeInUpBig"}>
          <Link href='/#about'>
            <a>
              <i className='fab fa-chevron-down fa-lg'></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
