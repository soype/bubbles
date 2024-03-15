"use client";

import React, { useState } from "react";

import DatePicker from "../DatePicker";

import styles from "./menu.module.scss";

const Menu = ({ toggleOff, changeToggle }) => {
  const [toggleDate, setToggleDate] = useState(toggleOff);
  const [date, setDate] = useState();

  const contactSubmitHandler = (e) => {
    e.preventDefault();
  };

  const toggleDateHandler = () => {
    setToggleDate(true);
  };

  const populateDateHandler = (newDate) => {
    setDate(newDate);
  };

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
            className={styles["menu__item__text"]}
            type="textarea"
            onClick={toggleDateHandler}
            value={`${formattedDate} - ${formattedTime}`}
            required
            readOnly
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

      <DatePicker toggleOff={toggleDate} passDate={populateDateHandler} />
    </div>
  );
};

export default Menu;
