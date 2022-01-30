import React, { useEffect } from "react";
import styles from "../components/roadMap.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const RoadMap = ({id}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id={id} className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.roadmap}>ROADMAP</h1>
        <div>
          <img
            className={styles.roadmapLane}
            src='/roadmapLane.svg'
            alt='Roadmap lane'
          />
        </div>
        {/* PHASE 1 */}
        <div className={styles.colalign}>
          <img
            className={`${styles.phase1} ${
              styles.dates
            } ${"wow animate__animated animate__fadeInLeftBig"}`}
            src='phase1.svg'
            alt='Lane for roadmap'
          />
          <img
            className={`${styles.phase1cont} ${
              styles.phaseCont
            } ${"wow animate__animated animate__fadeInLeftBig"}`}
            data-wow-delay='170ms'
            src='phase1cont.svg'
            alt='phase 1 cont'
          />
        </div>
        {/* PHASE 2 */}
        <div className={styles.colalign}>
          <img
            className={`${styles.phase2} ${
              styles.dates
            } ${"wow animate__animated animate__fadeInRightBig"}`}
            src='phase2.svg'
            alt='Lane for roadmap'
          />
          <img
            className={`${styles.phase2cont} ${
              styles.phaseCont
            } ${"wow animate__animated animate__fadeInRightBig"}`}
            data-wow-delay='170ms'
            src='phase2cont.svg'
            alt='phase 2 cont'
          />
        </div>
        {/* PHASE 3 */}
        <div className={styles.colalign}>
          <img
            className={`${styles.phase3} ${
              styles.dates
            } ${"wow animate__animated animate__fadeInLeftBig"}`}
            src='phase3.svg'
            alt='Phase 3'
          />
          <img
            className={`${styles.phase3cont} ${
              styles.phaseCont
            } ${"wow animate__animated animate__fadeInLeftBig"}`}
            data-wow-delay='170ms'
            src='phase3cont.svg'
            alt='Phase 3 cont'
          />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
