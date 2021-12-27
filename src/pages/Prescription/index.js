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
    constructor(props) {
        super(props);
        this.state = {
            selectVal: 'area',
            business: [],
            effectiveness: {}
        };
    }
    static getDerivedStateFromProps(props, state) {
        const {
            table: { effectiveness },
        } = props;
        let { business, selectVal } = state;
        if (Object.keys(effectiveness).length !== 0) {
            let listData = effectiveness[selectVal];
            return {
                business: [
                    ...listData,
                ],
                effectiveness
            };
        }
        return null;
    }
    getSelect = (val) => {
        let { effectiveness } = this.state;
        this.setState({
            selectVal: val,
            business: [...effectiveness[val]]
        })
    }
    getRow = (row) => {
        location.reload();
    }
    render() {
        const { business } = this.state;
        return (
            <Box title="供应链中心交付时效" contentClass={'tableHeight'} select={<select value={this.state.selectVal} className={styles.select} onChange={e => { this.getSelect(e.target.value) }}>
                <option value='category'>品类维度</option>
                <option value='area'>区域维度</option>
                <option value='office'>分公司维度</option>
                <option value='customer'>核心客户</option>
            </select>}>
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
                                onClick={() => { this.getRow(e) }}
                                key={e.ranking + Math.random()}
                                className={`${animate.animated} ${i === 0 ? animate.fadeInRight : animate.slideInDown
                                    }`}
                            >
                                <td>{e.ranking}</td>
                                <td>{e.kpi}</td>
                                <td>{e.month}</td>
                                <td style={{ color: e.growth > 0 ? '#ff0000' : '#00FF00' }}>{e.growth}</td>
                                <td>{e.aveYear}</td>
                                <td>{e.target}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        );
    }
}
