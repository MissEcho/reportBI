import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Box from '@/components/Box';
import Pie from '@/components/Charts/Pie';
import { genServiceOrder } from '@/utils/genChartData';
import styles from './index.scss';

@connect(({ table, node }) => ({
  table,
  node,
}))
export default class index extends PureComponent {
  render() {
    const {
      table: { nodeAllData },
      node,
    } = this.props;
    const curr = nodeAllData[node.text] ? nodeAllData[node.text].leftTop : { data: {} };
    const dataLeft = curr.data.dataLeft || [
      { name: '总处理行', value: 10211 },
      { name: '已处理行项', value: 6111 },
      { name: '待处理行项', value: 7711 },
    ];
    const dataRight = curr.data.dataRight || [
      { name: '正常行项', value: 10211 },
      { name: '异常行项', value: 6111 },
      { name: '告警行项', value: 7711 },
    ];
    const equipmentData1 = genServiceOrder(dataLeft);
    const equipmentData2 = genServiceOrder(dataRight);

    return (
      <Box title={curr.headerText || '客服概览'}>
        <div className={styles.chartBox}>
          <Pie data={equipmentData1} style={{ height: 250, width: 210 }} />
          <Pie data={equipmentData2} style={{ height: 250, width: 210 }} />
        </div>
      </Box>
    );
  }
}

function calculate(data = [], max) {
  let mmax = max;
  if (!mmax) {
    mmax = data.reduce((prev, cur) => cur.value + prev, 0);
  }
  return data.map(e => ({ ...e, percent: `${parseInt((e.value * 100) / mmax, 10)}%` }));
}
