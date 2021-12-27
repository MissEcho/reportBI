import React, { memo } from 'react';
import styles from './index.scss';

const Box = memo(props => {
  const { titleClass, select, contentClass, title, children } = props;
  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <div className={`${styles.title} ${titleClass}`}>{title}</div>
        {select || null}
      </div>
      <div className={`${styles.content} ${styles[contentClass]}`}>
        <i className={styles.topL}></i>
        <i className={styles.topR}></i>
        <i className={styles.bottomL}></i>
        <i className={styles.bottomR}></i>
        {children}
      </div>
    </div>
  );
});

export default Box;
