import React, { useEffect, useState } from "react";
import styles from "./banner.module.css";

// import { Button } from "@chakra-ui/react";

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
  const [copied, setCopied] = useState(false);
  const [contractAddressValue, setcontractAddressValue] = useState(
    "0x1062a2e6274709bb3ae9d358703e71eed1af7bd6"
  );
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.section1}>
          <div>
            <img
              className={styles.metasino}
              src='/metasino.svg'
              alt=''
            />
          </div>
          {/* <h2>METASINO</h2> */}
          <h3>
            first Play to Earn CASINO on the metaverse, built in the SANDBOX
            metaverse
          </h3>
          <h4>RRESALE held on PINKSALE on the 28th January</h4>
          <div className={styles.input}>
            <input type='text' readOnly value={contractAddressValue} />
            <button
              className={copied ? styles.success : styles.copy}
              onClick={() => {
                navigator.clipboard.writeText(
                  "0x1062a2e6274709bb3ae9d358703e71eed1af7bd6"
                );
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className={styles.buttonGrp}>
            <button className={styles.presale}>
              <a
                href='https://www.pinksale.finance/#/launchpad/0x01FC371394E2C552C4920CF0521611A7b1592877?chain=BSC'
                target='_blank'
                rel='noreferrer'>
                BUY PRESALE
              </a>
            </button>
            <button className={styles.telegram}>
              <a href='t.me/MetasinoChat' target='_blank' rel='noreferrer'>
                JOIN TELEGRAM
              </a>
            </button>
          </div>
        </div>
        <div className={styles.section2}>
          <video loop muted autoPlay height={350}>
            <source src='/cube.mp4' type='video/mp4' />
            Sorry, your browser doesnt support embedded videos.
          </video>
        </div>
        <img
          className={styles.firstdice}
          src='/img/Dice.png'
          alt=''
        />
        <img
          className={styles.seconddice}
          src='/img/Dice.png'
          alt=''
        />
      </div>
      {/* <div className={styles.col2}>
        <div>
          <img
            data-wow-delay='470ms'
            className={`${
              styles.metasinoLogo
            } ${"wow animate__animated animate__fadeInDown"}`}
            src='img/Metasino-logo.png'
            alt='metasino logo'
          />
        </div>
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
        </div> */}
      {/* <div
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
        </div> */}
      {/* <div>
          <a
            className={styles.joinPresale}
            href='https://www.pinksale.finance/#/launchpad/0x01FC371394E2C552C4920CF0521611A7b1592877?chain=BSC'
            target='_blank'
            rel='noreferrer'>
            Join Presale
          </a>
        </div>
      </div>*/}
    </div>
  );
}

export default Banner;
