import React from 'react';

import DatePicker from '../DatePicker';

import styles from './menu.module.scss';

const Menu = ({ toggleOff }) => {
  return (
    <div className={styles.menu}>
        <div className={styles["menu__container"]}>
            <div className={styles['menu__container--item']}>Name</div>
            <div className={styles['menu__container--item']}>Message</div>
            <div className={styles['menu__container--item']}>Date</div>
            <div className={styles['menu__container--item']}>Submit</div>
        </div>

        <DatePicker toggleOff={toggleOff} />
    </div>
  )
}

export default Menu;