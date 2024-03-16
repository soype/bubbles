'use client'

import React, { useState, useEffect } from 'react';

import styles from './timeSelector.module.scss';
import { userAgentFromString } from 'next/server';

const TimeSelector = ({passTime}) => {

  const [selectedTime, setSelectedTime] = useState(undefined);

  useEffect(() => {
    passTime(selectedTime)
  }, [selectedTime])

    const timeSelectorHandler = (e) => {

        const buttons = document.querySelectorAll(".time-selector__tile");
    
        buttons.forEach((button) => {
          button.classList.remove("time-selector__tile--active");
        });
        e.target.classList.add("time-selector__tile--active");

        const time = e.target.innerHTML.substring(0, 5); 

        setSelectedTime(time);

      };

  return (
    <div className={styles.time}>
        <p>Time (GMT-3)</p>
        <div className={styles["time-selector"]}>
          <div className={styles["time-selector__column"]}>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              09:00 - 09:30
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              09:30 - 10:00
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              10:00 - 10:30
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              10:30 - 11:00
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              11:00 - 11:30
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              11:30 - 12:00
            </button>
          </div>
          <div className={styles["time-selector__column"]}>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              14:00 - 14:30
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              14:30 - 15:00
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              15:00 - 15:30
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              15:30 - 16:00
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              16:00 - 16:30
            </button>
            <button
              className="time-selector__tile"
              onClick={timeSelectorHandler}
            >
              16:30 - 17:00
            </button>
          </div>
        </div>
      </div>
  )
}

export default TimeSelector