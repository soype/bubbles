"use client";

import React, { useState } from "react";

import styles from "./bubbles.module.scss";

const Bubbles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.b1}></div>
      <div className={styles.b2}></div>
      <div className={styles.b3}></div>
      <div className={styles.b4}></div>
      <div className={styles.b5}></div>
    </div>
  );
};

export default Bubbles;
