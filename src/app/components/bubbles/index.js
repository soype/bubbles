"use client";

import React, { useState, useEffect, useRef } from "react";

import styles from "./bubbles.module.scss";

const Bubbles = ( { color } ) => {

  return (
    <div className={styles.container}>
      <h2>Bubble Bubble</h2>
    <div className={styles['bubble-container']} id="bubbleContainer">
      <div className={styles.b1} id="blue"></div>
      <div className={styles.b2} id="purple"></div>
      <div className={styles.b3} id="blue-lt"></div>
      <div className={styles.b4} id="red"></div>
      <div className={styles.b5} id="yellow"></div>
    </div>
    </div>
  );
};

export default Bubbles;
