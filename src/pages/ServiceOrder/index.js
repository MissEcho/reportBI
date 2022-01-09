import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Card from '@/components/Card';
import Box from '@/components/Box';
import Labels from '@/components/Labels';
import Pie from '@/components/Charts/Pie';
import { genEquipment2 } from '@/utils/genChartData';
import styles from './index.scss';

const legends = {
  PC: {
    key: 'PC',
    label: '总行项',
    type: 'circle',
    backgroundColor: '#FF8700',
  },
  Android: {
    key: 'Android',
    label: '已处理行项',
    type: 'circle',
    backgroundColor: '#ffc300',
  },
  Iphone: {
    key: 'Iphone',
    label: '待处理行项',
    type: 'circle',
    backgroundColor: '#00e473',
  },
};

@connect(({ loan }) => ({
  loan,
}))
export default class index extends PureComponent {
  render() {
    const { loan, header = '客服总览' } = this.props;
    console.log(this.props);
    // const { equipment } = loan;
    const equipment = [
      { name: '总处理行', value: 10211 },
      { name: '已处理行项', value: 6111 },
      { name: '待处理行项', value: 7711 },
    ];
    const equipment2 = [
      { name: '正常行项', value: 10211 },
      { name: '异常行项', value: 6111 },
      { name: '告警行项', value: 7711 },
    ];
    const equipmentData1 = genEquipment2(equipment, legends);
    const equipmentData2 = genEquipment2(equipment2, legends);

    return (
      <Box title={header}>
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
