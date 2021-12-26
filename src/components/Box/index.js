import React, { memo } from 'react';
import styles from './index.scss';

const Box = memo(props => {
  const { titleClass, legends, select, contentClass, title, children } = props;
  const getSelect = (val, event) => {
    console.log(val, event)
  }
  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <div className={`${styles.title} ${titleClass}`}>{title}</div>
        {select ? <select value="area" className={styles.select} onChange={e => { console.log(e.target) }}>
          <option value='cage'>品类</option>
          <option value='area'>区域</option>
          <option value='city'>分公司</option>
          <option value='customer'>客户组</option>
        </select> : null}
      </div>
      <div className={`${styles.content} ${contentClass}`}>
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
