'use client'

import React, { useState } from 'react';

import styles from "./page.module.scss";

import Bubbles from "./components/bubbles";

export default function Home() {

  const [color, setColor] = useState('blue')

  const colorSelectHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <main className={styles.main}>
      <Bubbles color={color}></Bubbles>
      <div className={styles['color-selector']}>
        {/* <select id="colorSelect" onChange={colorSelectHandler}>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="blue-lt">Light blue</option>
          <option value="purple">Purple</option>
        </select> */}
      </div>
    </main>
  );
}
