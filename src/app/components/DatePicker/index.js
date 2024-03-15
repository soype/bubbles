'use client'

import React, { useState } from 'react';

import Calendar from 'react-calendar';

import styles from './date.module.scss'

const DatePicker = ( {toggleOff} ) => {

  return (
    <div className={`${styles.container} ${toggleOff ? styles.display : ''}`}>
      <Calendar className={styles.calendar} />
    </div>
  )
}

export default DatePicker;