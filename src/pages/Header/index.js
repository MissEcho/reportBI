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
const FORMAT = 'YYYY/MM/DD HH:mm:SS';

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
  const switchFlow = (item) => {
    let i = flow.indexOf(item)
    if (i > -1) {
      // 存在，则取消
      if (flow.length == 1) {
        // alert('至少需要一种流量')
        return false;
      } else {
        flow.splice(i, 1);
        setFlow([...flow])
      }
    } else {
      setFlow([item, ...flow])
    }
  }
  return (
    <div className={styles.header}>
      <div className={styles.time}>
        <SvgIcon icon="icon-time" className={styles.timeIcon} />
        {moment(time).format(FORMAT)}
      </div>
      <div className={styles.title}>集什供应链执行作战监控中心</div>
      <div className={styles.flow}>
        <div onClick={() => { switchFlow('warehouse') }} className={`${flow.indexOf('warehouse') > -1 ? styles.active : ''}`}> <span></span> 到仓</div>
        <div onClick={() => { switchFlow('straight') }} className={`${flow.indexOf('straight') > -1 ? styles.active : ''}`}> <span></span> 直发</div>
      </div>
      <div className={styles.desc} onClick={switchStatus} >
        {type ? <div className={styles.online}>
          <span className={styles.box}></span>
          <span className={styles.text}>实时模式</span>
        </div> :
          <div className={styles.outline}>
            <span className={styles.text}>离线模式</span>
            <span className={styles.box}></span></div>}
        {/* 实时{type}
        {type ? <SvgIcon icon="icon-kaiguan-kai" className={`${styles.setIcon} ${styles.open}`} /> :
          <SvgIcon icon="icon-kaiguan-guan" className={`${styles.setIcon} ${styles.close}`} />}
        离线 */}
      </div>
    </div>
  );
});

export default Header;
