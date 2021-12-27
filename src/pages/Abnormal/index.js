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
    constructor(props) {
        super(props);
        this.state = {
            business: [],
        };
    }
    static getDerivedStateFromProps(props, state) {
        const {
            table: { abnormal },
        } = props;
        let { business } = state;
        if (abnormal.length !== 0) {
            if (business.length > 7) {
                business = business.slice(0, 7);
            }
            return {
                business: [
                    ...abnormal,
                    ...business,
                ],
            };
        }
        return null;
    }
    componentDidMount() {
        // 等运行之后从table里面去取值
        const {
            table: { abnormal },
        } = this.props;
        const { business } = this.state;
        const t = setInterval(() => {
            this.getNum() > 5 ?
                this.setState({
                    business: [
                        ...abnormal,
                        ...business,
                    ]
                }) : null
        }, 10000);
        return () => { clearInterval(t) }
    }
    getNum = () => {
        return Math.floor(Math.random() * 10);
    }

    render() {
        const { business } = this.state;
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
