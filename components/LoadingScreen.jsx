// import React, { useState, useEffect } from "react";
// import styles from "./loadingScreen.module.css";


// const LoadingScreen = (props) => {
//   return <div className={props.loading ? styles.screen : styles.none}>
//       <img src="img/801.gif" alt="" srcset="" />
//       <h2>LOADING...</h2>
//   </div>;
// };

// export default LoadingScreen;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./loadingScreen.module.css";

export default function LoadingScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;

    function start() {
      setProgress(1);
      increment();
    }

    function increment() {
      const timeout = Math.round(Math.random() * 300);

      setProgress((progress) => {
        const percent = Math.round(Math.random() * 10);
        const next = Math.min(progress + percent, 80);

        if (next < 80) {
          timer = setTimeout(increment, timeout);
          return next;
        }

        return 80;
      });
    }

    function complete() {
      clearTimeout(timer);
      setProgress(100);
    }

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", complete);
    router.events.on("routeChangeError", complete);

    return () => {
      clearTimeout(timer);
      router.events.off("routeChangeStart");
      router.events.off("routeChangeComplete");
      router.events.off("routeChangeError");
    };
  }, []);

  return (
    <div className={styles.progress}>
      <div
        className={styles.indicator}
        style={{
          width: `${progress}%`,
          opacity: progress > 0 && progress < 100 ? 1 : 0,
        }}
      />
    </div>
  );
}
