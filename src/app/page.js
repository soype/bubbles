'use client'

import React, { useState } from 'react';

import styles from "./page.module.scss";

import Bubbles from "./components/bubbles";
import DatePicker from "./components/DatePicker";

export default function Home() {

  const [calendarOn, setCalendarOn] = useState(false);

  const calendarOffHandler = () => {
    setCalendarOn(false);
    console.log(calendarOn)
  }

  return (
    <main className={styles.main}>
      <Bubbles calendarOff={calendarOffHandler}></Bubbles>
      <div className={styles['content']}>
        <DatePicker toggled={calendarOn} />
      </div>
      <div className={styles['color-selector']}>
      </div>
    </main>
  );
}
