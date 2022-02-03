import React, { useState, useRef, useEffect } from "react";
import styles from "./timer.module.css";

const Timer = () => {
    // The state for our timer
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
      const countdownDate = new Date("Febuary 1, 2022 19:00:00").getTime();

      interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = countdownDate - now;

          const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
          const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // UPDATE TIMER
        // CHECK IF COUNTDOWN IS COMPLETE
        if (distance < 0) {
            // stop timer
            clearInterval(interval.current);
        } else {
            // update timer
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
      }, 1000)
  }
  
  useEffect(() => {
    startTimer();
    return () => {
        clearInterval(interval.current)
    }
  }, []);

  return (
    <div className={styles.timer}>
      <h3>Metasino Launching in</h3>
      <div className={styles.timeflex}>
         <div className={styles.time}>
          <span>
            {timerHours}: {""}
          </span>
        </div>
        <div className={styles.time}>
          <span>
            {timerMinutes}: {""}
          </span>
        </div>
        <div className={styles.time}>
          <span>{timerSeconds}</span>
        </div>
      </div>
      <a
        href='https://pancakeswap.finance/swap?outputCurrency=0x04C3c450A633FfDabBA3730209A9fcE1eb72388e'
        target='_blank'
        rel='noreferrer'>
        Buy $Casino
      </a>
    </div>
  );
};

export default Timer;
