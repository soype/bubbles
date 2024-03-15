"use client";

import React, { useState } from "react";

import styles from "./page.module.scss";

import Bubbles from "./components/bubbles";
import Menu from "./components/Menu";

export default function Home() {
  const [toggleOff, setToggleOff] = useState(false);

  const toggleOffHandler = () => {
    setToggleOff(false);
    console.log(toggleOff)
  };

  return (
    <main className={styles.main}>
      <Bubbles toggleOff={toggleOffHandler}></Bubbles>
      <div className={styles["content"]}>
        <Menu toggled={toggleOff} />
      </div>
      {/* <div className={styles["color-selector"]}></div> */}
    </main>
  );
}
