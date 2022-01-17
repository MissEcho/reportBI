import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import Box from '@/components/Box';
import styles from './index.scss';

@connect(({ table }) => ({
  table,
}))
export default class index extends PureComponent {
  render() {
    const { header, data } = this.props;
    return (
      <Box title={header}>
        <table className={styles.tableBox}>
          <tbody className={styles.tableBody}>
            {data.slice(0, 5).map((e, i) => (
              <tr
                key={i + Math.random()}
                className={`${animate.animated} ${
                  i === 0 ? animate.fadeInRight : animate.slideInDown
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
        <p style={{ height: '5px' }}></p>
      </Box>
    );
  }
}
