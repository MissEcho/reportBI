import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Box from '@/components/Box';
import Bar from '@/components/Charts/Bar';
import { genTrend } from '@/utils/genChartData';
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
    const curr = nodeAllData[node.text] ? nodeAllData[node.text].leftMid : { data: {} };
    const trendData = curr.data || {
      bar: [
        { date: '1', value: 1075 },
        { date: '2', value: 1530 },
        { date: '3', value: 1620 },
        { date: '4', value: 1865 },
        { date: '5', value: 2053 },
        { date: '6', value: 3643 },
      ],
      line: [
        { date: '50', value: 6100 },
        { date: '60', value: 7430 },
        { date: '70', value: 5620 },
        { date: '80', value: 6865 },
        { date: '90', value: 4053 },
        { date: '00', value: 3643 },
      ],
    };
    const ageAverageData = genTrend(trendData);
    return (
      <Box title={curr.headerText || '开单走势'}>
        <div className={styles.chartBox}>
          <Bar data={ageAverageData} style={{ height: 220, width: 400 }} />
        </div>
      </Box>
    );
  }
}
