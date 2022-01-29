import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./about.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const About = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { aboutData, id } = props;
  return (
    <section id={id} className={styles.container}>
      {/* SANDBOX */}
      <div className={styles.sandbox}>
        <div className={styles.sandbox_text} data-aos='fade-down-left'>
          <h4>
            Metasino has acquired its first of many metaverse land on SANDBOX
          </h4>
          <img
            className={styles.land}
            src='/img/land.jpg'
            alt='metasino logo'
          />
        </div>
      </div>
      {/*  */}
      <div className={styles.about}>
        <div data-aos='fade-left' className={styles.aboutHeading}>
          <img
            className={styles.aboutHeading}
            src='/aboutHeading.svg'
            alt='about heading'
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: aboutData }}
          className={styles.aboutText}
          data-aos='zoom-in-up'></div>
        <div>
          <a
            className={styles.downloadWhitePaper}
            target='_blank'
            rel='noreferrer'
            href='https://www.pinksale.finance/#/launchpad/0x01FC371394E2C552C4920CF0521611A7b1592877?chain=BSC'>
            Join Presale
          </a>
        </div>
        <div>
          <Link href='/whitepaper.pdf'>
            <a className={styles.join} target='_blank' rel='noreferrer'>
              View Metasino litepaper
            </a>
          </Link>
        </div>

        <div className={styles.mus}>
          <h4>WHAT MAKES US SPECIAL</h4>
          <p>
            Metasino harnesses the power of Blockchain to deliver a platform
            players can fully trust.But its the exclusive combination of
            features, social elements, design, and unique technical solutions
            that sets Metasino apart from the competition.
          </p>
        </div>
        {/* <div className={styles.socialsSection}>
          <h3>Join the Conversation</h3>
          <div className={styles.socialsFlex}>
            <div>
              <a
                className={styles.socials}
                href='https://t.me/MetasinoChat'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-telegram'></i>
              </a>
            </div>
            <div>
              <a
                className={styles.socials}
                href='https://t.me/metasinochat'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-twitter'></i>
              </a>
            </div>
            <div>
              <a
                className={styles.socials}
                href='https://www.instagram.com/metasinolive/'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </div> */}
        {/* Strategic Partnership */}
        <div className={styles.partnership}>
          <div data-aos='fade-right'>
            <img
              className={styles.metasinoLogo}
              src='/img/Metasino-logo.png'
              alt='metasino logo'
            />
          </div>
          <div className={styles.partnership_text} data-aos='fade-down-left'>
            <h4>STRATEGIC PARTNERSHIP WITH PARTY FOX NFT</h4>
            <p>
              Party fox are collections of composed 5999 pixelated originally
              designed fox’s. This is a skilk of foxes that does nothing but
              party all day. <br /> <br /> Owning a fox gives you access to
              their future events and shows worldwide where creators, collectors
              and investors will be in attendance. Every fox collector will have
              access to their metaverse.
            </p>
          </div>
        </div>
        {/*  */}
        {/* COLLABORATION */}
        <div className={styles.collaboration}>
          <div data-aos='fade-left'>
            <img
              className={styles.strategicPart}
              src='/img/strategicPart.jpg'
              alt='metasino logo'
            />
          </div>
          <div className={styles.collaboration_text} data-aos='fade-up-right'>
            <h4>COLLABORATION</h4>
            <p>
              Worldwide research shows that party lovers are mostly gamblers,
              and gamblers some party freaks. <br />
              Metasino and Party Fox are in strategic partnership where holders
              of Party Fox NFT will have access to play games in the Metasino
              and $CASINO Token holders will have access to Party Fox events.
              Party Fox NFT can be swapped for CASINO Tokens, players can earn
              Party Fox NFTs as reward for games played in the Metasino.
              Additional CASINO can be staked to earn Party Fox NFTs as reward.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
    </section>
  );
};

export default About;
