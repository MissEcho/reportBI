import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import Box from '@/components/Box';

import styles from './index.scss';
const columns = [
    {
        title: '序号',
        dataIndex: 'ranking',
        width: 75,
    },
    {
        title: '指标名称',
        dataIndex: 'classify',
        width: 70,
    },
    {
        title: '7月份',
        dataIndex: 'month',
        width: 65,
    },
    {
        title: '月同比',
        dataIndex: 'growth',
        width: 65,
    },
    {
        title: '年平均',
        dataIndex: 'aveYear',
        width: 70,
    },
    {
        title: '目标值',
        dataIndex: 'target',
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
        let business = table.office;
        return (
            <Box title="供应链中心交付时效" select={true}>
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
                        {business.slice(0, 12).map((e, i) => (
                            <tr
                                key={e.ranking + Math.random()}
                                className={`${animate.animated} ${i === 0 ? animate.fadeInRight : animate.slideInDown
                                    }`}
                            >
                                <td>{e.ranking}</td>
                                <td>{e.classify}</td>
                                <td>{e.month}</td>
                                <td>{e.growth}</td>
                                <td>{e.aveYear}</td>
                                <td>{e.target}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p style={{ height: "15px" }}></p>
            </Box>
        );
    }
}
