"use client";

import React, { useState } from "react";

import Calendar from "react-calendar";
import TimeSelector from "./TimeSelector";

import styles from "./date.module.scss";

const DatePicker = ({ toggleOff, passDate, changeToggle }) => {
  const [date, setDate] = useState(new Date());
  const [timeSelected, setTimeSelected] = useState(false);

  const dateHandler = (newDate) => {
    newDate.setHours(date.getHours());
    newDate.setMinutes(date.getMinutes());
    setDate(newDate);
    //Ensure that the date will only be shown if the hour has been selected
    if (timeSelected) {
      passDate(newDate);
    }
  };

  const timeHandler = (newTime) => {
    if (newTime) {
      const [hours, minutes] = newTime.split(":").map(Number);
      let newDate = new Date(date);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      setDate(newDate);
      passDate(newDate);
      setTimeSelected(true);
    }
  };

  const toggleHandler = () => {
    changeToggle();
  }

  return (
    <div className={`${styles.container} ${toggleOff ? styles.display : ""}`}>
      <div className={styles["container__row1"]}>
        <Calendar
          className={styles.calendar}
          onChange={dateHandler}
          value={date || new Date()}
        />
        <TimeSelector passTime={timeHandler} />
      </div>
      <div className={styles["container__row2"]}>
        <button className={styles.done} onClick={toggleHandler} disabled={!timeSelected}>Done</button>
      </div>
    </div>
  );
};

export default DatePicker;
