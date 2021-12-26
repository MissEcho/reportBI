import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import Box from '@/components/Box';

import styles from './index.scss';

const columns = [
    {
        title: '监控节点',
        dataIndex: 'name',
        width: 75,
    },
    {
        title: '总行项数',
        dataIndex: 'orderNum',
        width: 70,
    },
    {
        title: '告警行项',
        dataIndex: 'overdue',
        width: 65,
    },
    {
        title: '异常行项',
        dataIndex: 'status',
        width: 65,
    },
    {
        title: '正常行项',
        dataIndex: 'dealName',
        width: 70,
    },
    {
        title: '异常率',
        dataIndex: 'time',
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
        let business = table.abnormal;
        return (
            <Box title="异常订单滚动播报">
                <table className={styles.tableBox}>
                    {/* <thead className={styles.tableHead}>
                        <tr>
                            {columns.map(c => (
                                <th key={c.dataIndex} style={{ width: c.width }}>
                                    {c.title}
                                </th>
                            ))}
                        </tr>
                    </thead> */}
                    <tbody className={styles.tableBody}>
                        {business.slice(0, 5).map((e, i) => (
                            <tr
                                key={i + Math.random()}
                                className={`${animate.animated} ${i === 0 ? animate.fadeInRight : animate.slideInDown
                                    }`}
                            >
                                <td>{e.name}</td>
                                <td>{e.orderNum}</td>
                                <td>{e.overdue}</td>
                                <td>{e.status}</td>
                                <td>{e.dealName}</td>
                                <td>{e.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p style={{ height: "5px" }}></p>
            </Box>
        );
    }
}
