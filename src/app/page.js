"use client";

import React, { useState } from "react";

import styles from "./page.module.scss";

import Bubbles from "./components/bubbles";
import Menu from "./components/Menu";

export default function Home() {
  const [isToggled, setIsToggled] = useState(true);

  const toggleOffHandler = () => {
    setIsToggled(false);
  };

  const toggleHandler = () => {
    if(!isToggled){
      setIsToggled(true)
    }else{
      setIsToggled(false)
    }
  }

  return (
    <main className={styles.main}>
      <Bubbles toggleOff={toggleOffHandler}></Bubbles>
      <div className={styles["content"]}>
        <Menu isToggled={isToggled} changeToggle={toggleHandler} disengageToggle={toggleOffHandler} />
      </div>
    </main>
  );
}
