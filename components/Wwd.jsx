import React from 'react';
import styles from "../components/wwd.module.css";

const Wwd = () => {
  return (
    <div id='#wwd' className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <img className={styles.img} src='/img/special.jpg' alt='' />
        </div>
        <div className={styles.right}>
          <h3>WHAT MAKES US UNIQUE</h3>
          <p>
            Metasino harnesses the power of Blockchain to deliver a platform
            players can fully trust.But it’s the exclusive combination of
            features, social elements, design, and unique technical solutions
            that sets Metasino apart from the competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wwd;
