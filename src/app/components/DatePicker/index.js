"use client";

import React, { useState } from "react";

import Calendar from "react-calendar";
import TimeSelector from "./TimeSelector";

import styles from "./date.module.scss";

const DatePicker = ({ toggleOff, passDate }) => {
  const [date, setDate] = useState(new Date());
  const [timeSelected, setTimeSelected] = useState(false);

  const dateHandler = (newDate) => {
    newDate.setHours(date.getHours());
    newDate.setMinutes(date.getMinutes());
    setDate(newDate);
    //Ensure that the date will only be shown if the hour has been selected
    if (timeSelected) {
      passDate(newDate)
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

  return (
    <div className={`${styles.container} ${toggleOff ? styles.display : ""}`}>
      <Calendar
        className={styles.calendar}
        onChange={dateHandler}
        value={date || new Date()}
      />
      <TimeSelector passTime={timeHandler} />
    </div>
  );
};

export default DatePicker;
