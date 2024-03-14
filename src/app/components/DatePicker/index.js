'use client'

import React from 'react';

import Calendar from 'react-calendar';

import styles from './date.module.scss'

const DatePicker = () => {
  return (
    <div className={styles.container}>
      <Calendar className={styles.calendar} />
    </div>
  )
}

export default DatePicker;