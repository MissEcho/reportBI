import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import Box from '@/components/Box';

import styles from './index.scss';

const columns = [
    {
        title: '监控节点',
        dataIndex: 'nodes',
        width: 75,
    },
    {
        title: '总行项数',
        dataIndex: 'amount',
        width: 70,
    },
    {
        title: '告警行项',
        dataIndex: 'alarmAmount',
        width: 65,
    },
    {
        title: '异常行项',
        dataIndex: 'abnormalAmount',
        width: 65,
    },
    {
        title: '正常行项',
        dataIndex: 'normalAmount',
        width: 70,
    },
    {
        title: '异常率',
        dataIndex: 'untreatedAbnormalFee',
        width: 60,
    },
];

@connect(({ table }) => ({
    table,
}))
export default class index extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         business: [],
    //     };
    // }

    render() {
        const { table } = this.props;
        // const { business } = this.state;
        let business = table.purchase;
        return (
            <Box title="采购执行交付总览">
                <table className={styles.tableBox}>
                    <thead className={styles.tableHead}>
                        <tr>
                            {columns.map(c => (
                                <th key={c.dataIndex} style={{ width: c.width }}>
                                    {c.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {business.slice(0, 5).map((e, i) => (
                            <tr
                                key={i + Math.random()}
                                className={`${animate.animated} ${i === 0 ? animate.fadeInRight : animate.slideInDown
                                    }`}
                            >
                                <td>{e.nodes}</td>
                                <td>{e.amount}</td>
                                <td>{e.alarmAmount}</td>
                                <td>{e.abnormalAmount}</td>
                                <td>{e.normalAmount}</td>
                                <td>{e.untreatedAbnormalFee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        );
    }
}
