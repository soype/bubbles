'use client'

import React, { useState } from 'react';

import styles from "./page.module.scss";

import Bubbles from "./components/bubbles";
import DatePicker from "./components/DatePicker";

export default function Home() {

  return (
    <main className={styles.main}>
      <Bubbles></Bubbles>
      <div className={styles['content']}>
        <DatePicker />
      </div>
      <div className={styles['color-selector']}>
      </div>
    </main>
  );
}
