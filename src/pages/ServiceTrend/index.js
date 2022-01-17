import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Box from '@/components/Box';
import Bar from '@/components/Charts/Bar';
import { genTrend } from '@/utils/genChartData';
import styles from './index.scss';

@connect(({ table }) => ({
  table,
}))
export default class index extends PureComponent {
  render() {
    const { data, header } = this.props;
    const trendData = data;
    const ageAverageData = genTrend(trendData);
    return (
      <Box title={header}>
        <div className={styles.chartBox}>
          <Bar data={ageAverageData} style={{ height: 220, width: 400 }} />
        </div>
      </Box>
    );
  }
}
