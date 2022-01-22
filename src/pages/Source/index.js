import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import Box from '@/components/Box';

import styles from './index.scss';

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
    const { header, data, columns } = this.props;
    const business = data;
    return (
      <Box title={header}>
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
                className={`${animate.animated} ${
                  i === 0 ? animate.fadeInRight : animate.slideInDown
                }`}
              >
                <td>{e.nodes}</td>
                <td>{e.amount}</td>
                <td>{e.alarmAmount}</td>
                <td>{e.abnormalAmount}</td>
                <td
                  style={{
                    color: `${e.normalAmount > 70 ? '#ff0000' : e.normalAmount > 40 ? '#ffcc00' : '#ffffff'}`,
                  }}
                >{e.normalAmount}</td>
                <td
                  style={{
                    color: `${e.untreatedAbnormalFee > 70 ? '#ff0000' : e.untreatedAbnormalFee > 40 ? '#ffcc00' : '#ffffff'}`,
                  }}
                >{e.untreatedAbnormalFee}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    );
  }
}
