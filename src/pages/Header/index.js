import React, { memo, useState, useEffect } from 'react';
import { moment } from '@/utils/util';
import SvgIcon from '@/components/SvgIcon';
import styles from './index.scss';

SvgIcon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_624956_br6r8nb9msp.js'
});
SvgIcon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3078447_f9tibqf5rdv.js'
});
const FORMAT = 'YYYY-MM-DD HH:mm:SS';

const Header = memo(() => {
  const [time, setTime] = useState(+new Date());
  const [type, setType] = useState(true);
  const [flow, setFlow] = useState(['warehouse', 'straight']);
  useEffect(() => {
    const t = setInterval(() => {
      setTime(+new Date());
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const switchStatus = () => {
    let result = !type;
    setType(result)
  }

  return (
    <div className={styles.header}>
      <div className={styles.time}>
        {/* <SvgIcon icon="icon-time" className={styles.timeIcon} /> */}
        {/* <P  className={styles.timeIcon}>当前时间：</P> */}
        {moment(time).format(FORMAT)}
      </div>
      <div className={styles.title}>供应链交付预警监控中心</div>
      <div className={styles.desc} onClick={switchStatus} >
        <div className={`${type ? styles.online : styles.outline}`}>
          <span className={styles.box}></span>
          <span className={styles.text}>{`${type?'实时模式':'离线模式'}`}</span>
        </div>
      </div>
    </div>
  );
});

export default Header;
