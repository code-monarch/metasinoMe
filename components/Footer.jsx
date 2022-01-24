import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>
          © 2022 <a href='https://www.metasino.live'>Metasino. </a> All rights
          reserved
        </p>
      </div>
      {/* socials */}
      <div className={styles.socials}></div>
    </div>
  );
};

export default Footer;
