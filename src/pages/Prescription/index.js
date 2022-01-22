import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import Box from '@/components/Box';
import styles from './index.scss';

const pageSize = 13;
const page = 1;
@connect(({ table }) => ({
  table,
}))
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flow: ['warehouse', 'straight'],
    };
  }

  switchFlow = item => {
    const { flow } = this.state;
    const i = flow.indexOf(item);
    if (i > -1) {
      // 存在，则取消
      if (flow.length == 1) {
        // alert('至少需要一种流量')
        return false;
      } else {
        flow.splice(i, 1);
        this.setState({
          flow: [...flow],
        });
      }
    } else {
      this.setState({
        flow: [item, ...flow],
      });
    }
  };

  render() {
    const { data, columns, header } = this.props;
    const { flow } = this.state;
    const business = data;
    let start = (page - 1) * pageSize;
    if (start > business.length) {
      start = 0;
    }
    const end = start + pageSize;
    return (
      <Box
        title={header}
        legend={
          <div className={styles.flow}>
            <div
              onClick={() => {
                this.switchFlow('warehouse');
              }}
              className={`${flow.indexOf('warehouse') > -1 ? styles.active : ''}`}
            >
              {' '}
              <span />
              {' '}
到仓
            </div>
            <div
              onClick={() => {
                this.switchFlow('straight');
              }}
              className={`${flow.indexOf('straight') > -1 ? styles.active : ''}`}
            >
              {' '}
              <span />
              {' '}
直发
            </div>
          </div>
        }
        contentClass="tableHeight"
        // select={
        //   <select
        //     value={this.state.selectVal}
        //     className={styles.select}
        //     onChange={e => {
        //       this.getSelect(e.target.value);
        //     }}
        //   >
        //     <option value="area">区域维度</option>
        //     {/* <option value='category'>品类维度</option> */}
        //     <option value="office">分公司维度</option>
        //     {/* <option value='customer'>核心客户</option> */}
        //   </select>
        // }
      >
        <table className={styles.tableBox}>
          <thead className={styles.tableHead}>
            <tr>
              {columns &&
                columns.map(c => (
                  <th key={c.dataIndex} style={{ width: c.width }}>
                    {c.title}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {business.slice(start, end).map((e, i) => (
              <tr
                onClick={() => {
                  // this.getRow(e);
                }}
                key={e.ranking + Math.random()}
                className={`${animate.animated} ${animate.slideInDown}`}
              >
                <td>{e.ranking}</td>
                <td>{e.kpi}</td>
                <td>{e.month}</td>
                <td>{e.growth}</td>
                <td>{e.aveYear}</td>
                <td
                  style={{
                    color: `${e.target > 70 ? '#ff0000' : e.target > 40 ? '#ffcc00' : '#ffffff'}`,
                  }}
                >
                  {e.target}
%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    );
  }
}
