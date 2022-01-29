import Link from "next/link";
import React from "react";
import styles from "@/components/sidebar.module.css";

const SideBar = ({ toggleDropdown, dropMenuVisibility }) => {

  return (
    <nav className={dropMenuVisibility ? styles.navMenuActive : styles.navMenu}>
      <ul className={styles.navList}>
        {/*  */}
        <li className={styles.navItem}>
          <Link href='/#about'>
            <a className={styles.a}>About</a>
          </Link>
        </li>
        {/*  */}
        <li className={styles.navItem}>
          <Link href='/#roadmap'>
            <a className={styles.a} onClick={toggleDropdown}>
              Roadmap
            </a>
          </Link>
        </li>
        {/*  */}
        <li className={styles.navItem}>
          <Link href='/#tokenomics' onClick={toggleDropdown}>
            Tokenomics
          </Link>
        </li>
        {/*  */}
        <li className={styles.navItem}>
          <a
            href='https://www.pinksale.finance/#/launchpad/0x01FC371394E2C2552C4920CF0521611A7B1592877?chain=BSC'
            target='_blank'
            rel='noreferrer'
            onClick={toggleDropdown}>
            Presale
          </a>
        </li>
        {/*  */}
        <li className={styles.navItem} onClick={toggleDropdown}>
          <Link href='/whitepaper.pdf'>
            <a className={styles.a} target='_blank' rel='noopener noreferrer'>
              Litepaper
            </a>
          </Link>
        </li>
      </ul>
      {/* EXIT ICON */}
      <span onClick={toggleDropdown} className={styles.backIcon}>
        &times;
      </span>
    </nav>
  );
};

export default SideBar;
