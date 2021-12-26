import React, { memo, PureComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import ScrollNum from '@/components/ScrollNum';
import Node from '@/components/Node';

import styles from './index.scss';

const Overview = memo(() => {
    const [sum1, setSum1] = useState(3456);
    const [sum2, setSum2] = useState(456);
    const [sum3, setSum3] = useState(700);
    const [sum4, setSum4] = useState(3456);
    const [sum5, setSum5] = useState(33.45);

    useEffect(() => {
        const t = setInterval(() => {
            let val = getAddVal();
            setSum1(sum => sum + val);
            setTimeout(() => {
                let val2 = getAddVal();
                setSum2(sum => sum + val2);
            }, 2000);
            let val3 = getAddVal();
            setSum3(sum => sum + val3);
            let val4 = getAddVal();
            setSum4(sum => sum + val4);
            let val5 = getAddVal();
            setSum5(sum => sum + val5);
        }, 5000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className={styles.overview}>
            <div className={styles.top}>
                <div>
                    <ScrollNum numbers={sum1} style={{ color: '#ffffff' }} />
                    <p>总执行单量</p>
                </div>
                <div>
                    <ScrollNum numbers={sum2} style={{ color: '#FF0000' }} />
                    <p>异常单量</p>
                </div>
                <div>
                    <ScrollNum numbers={sum3} style={{ color: '#FFCC00' }} />
                    <p>告警单量</p>
                </div>
                <div>
                    <ScrollNum numbers={sum4} style={{ color: '#188A4F' }} />
                    <p>正常单量</p>
                </div>
                <div>
                    <ScrollNum numbers={sum5} type={'percent'} style={{ color: '#ffffff' }} />
                    <p>未处理异常率</p>
                </div>
            </div>
            <div className={styles.graph}>
                <Node> </Node>
                <div className={styles.legend}>
                    <p className={styles.abnormal}><span ></span> 异常：超2小时未处理订单</p>
                    <p className={styles.warning}><span ></span>  告警：超1小时未处理订单</p>
                    <p className={styles.normal}><span ></span>  正常：未超时处理订单</p>
                </div>
            </div>
        </div>
    );

})

export default Overview;
function getAddVal() {
    return Math.floor(Math.random() * 10)
}