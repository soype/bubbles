"use client";

import React, { useState, useRef } from "react";

import DatePicker from "../DatePicker";

import styles from "./menu.module.scss";

const Menu = ({ isToggled, changeToggle, disengageToggle }) => {

  const [date, setDate] = useState();
  const dateRef = useRef(null);

  let formattedDate = '';
  let formattedTime = '';

  if (date instanceof Date && !isNaN(date)) {
    formattedDate = date.toLocaleDateString(undefined, {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });

    formattedTime = date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const contactSubmitHandler = (e) => {
    e.preventDefault();
    if(dateRef.current.value.length > 4){
        disengageToggle(false);
    }else{

    }
  };

  const toggleDateHandler = () => {
    changeToggle();
  };

  const populateDateHandler = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className={styles.menu}>
      <form
        className={styles["menu__container"]}
        onSubmit={contactSubmitHandler}
      >
        <div className={styles["menu__item"]}>
          <label className={styles["menu__item__label"]} htmlFor="">
            Name
          </label>
          <input
            className={styles["menu__item__text"]}
            type="textarea"
            required
          />
        </div>
        <div className={styles["menu__item"]}>
          <label className={styles["menu__item__label"]} htmlFor="">
            Mail
          </label>
          <input className={styles["menu__item__text"]} type="email" required />
        </div>
        <div className={styles["menu__item"]}>
          <label className={styles["menu__item__label"]} htmlFor="">
            When?
          </label>
          <input
            className={styles["menu__item__date"]}
            type="textarea"
            onClick={toggleDateHandler}
            value={`${formattedDate} - ${formattedTime}`}
            required
            readOnly
            ref={dateRef}
          />
        </div>
        <div className={`${styles["menu__item"]} ${styles["menu__submit"]}`}>
          <input
            className={styles["menu__item__submit"]}
            type="submit"
            value="Get in touch"
          />
        </div>
      </form>

      <DatePicker toggleOff={isToggled} passDate={populateDateHandler} changeToggle={toggleDateHandler} />
    </div>
  );
};

export default Menu;
