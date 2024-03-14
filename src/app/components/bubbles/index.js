"use client";

import React, { useState, useEffect } from "react";
import styles from "./bubbles.module.scss";

const Bubbles = ({ color }) => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      const rect = document.getElementById('bubbleContainer').getBoundingClientRect();
      setCurrentPosition({ 
        x: (e.clientX - rect.left),  
        y: (e.clientY - rect.top) 
      });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2>Let's schedule a call</h2>
      <div className={styles["bubble-container"]} id="bubbleContainer">

      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
        <div className={styles.b1} id="blue"></div>
        <div className={styles.b2} id="purple"></div>
        <div className={styles.b3} id="blue-lt"></div>
        <div className={styles.b4} id="red"></div>
        <div className={styles.b5} id="yellow"></div>
        <div className={styles.b6} id="lightblue"></div>
        <div
          className={styles.interactive}
          id="interactive"
          style={{
            transform: `translate(${currentPosition.x}px, ${currentPosition.y}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};


export default Bubbles;
