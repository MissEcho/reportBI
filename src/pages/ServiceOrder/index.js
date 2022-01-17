import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Box from '@/components/Box';
import Pie from '@/components/Charts/Pie';
import { genServiceOrder } from '@/utils/genChartData';
import styles from './index.scss';

@connect(({ table }) => ({
  table,
}))
export default class index extends PureComponent {
  render() {
    const { data, header } = this.props;
    const leftData = genServiceOrder(data.dataLeft);
    const rightData = genServiceOrder(data.dataRight);

    return (
      <Box title={header}>
        <div className={styles.chartBox}>
          <Pie data={leftData} style={{ height: 250, width: 210 }} />
          <Pie data={rightData} style={{ height: 250, width: 210 }} />
        </div>
      </Box>
    );
  }
}
