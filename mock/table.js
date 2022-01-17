const Mock = require('mockjs');
// 返回的是数据
module.exports = function table() {
  return {
    overview: getOverview(),
    default: {
      leftTop: getLeftTopTable(),
      leftMid: getLeftMidTable(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    客户下单: {
      leftTop: getLeftTopPie('客户下单'), // 扇形就用pie
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    客服确认: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    客服开单: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    客服传送: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    仓库发货: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    客户签收: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    客户妥投: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    采购寻源: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    采购下单: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    供应商接单: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    供应商发货: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    物流签收: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    仓库入库: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    换货申请: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
    换货审核: {
      leftTop: getLeftTopPie(),
      leftMid: getLeftMidLine(),
      leftBottom: getLeftBottomTable(),
      centerBottom: getCenterBottomTable(),
      rightTop: getRightTopTable(),
      rightBottom: getRightBottomTable(),
    },
  };
};

function getOverview() {
  return Mock.mock({
    'sum1|200-300': 1, // 生成200到300之间的数字
    'sum2|200-300': 1,
    'sum3|200-300': 1,
    'sum4|200-300': 1,
    'sum5|1-90': 1,
  });
}
function getLeftTopTable() {
  const data = [
    {
      nodes: '待处理总行项',
    },
    {
      nodes: '待确认行项',
    },
    {
      nodes: '待创建行项',
    },
    {
      nodes: '待开单行项',
    },
    {
      nodes: '待换货行项',
    },
  ];
  data.forEach(item => {
    const line1 = Mock.mock({
      'amount|200-300': 1, // 生成200到300之间的数字
      'alarmAmount|20-30': 1,
      'abnormalAmount|20-30': 1,
    });
    item.amount = line1.amount;
    item.alarmAmount = line1.alarmAmount;
    item.abnormalAmount = line1.abnormalAmount;
    item.normalAmount = line1.amount - line1.alarmAmount - line1.abnormalAmount;
    item.untreatedAbnormalFee = `${(
      ((line1.alarmAmount + line1.abnormalAmount) / line1.amount) *
      100
    ).toFixed(2)}%`;
  });
  return data;
}
function getLeftTopPie(type) {
  const nums = Mock.mock({
    'num1|200-300': 1, // 生成200到300之间的数字
    'num2|200-300': 1,
  });
  nums.num3 = nums.num1 + nums.num2;
  let data = {};
  switch (type) {
    case '客户下单':
      data = {
        dataLeft: [
          { name: '总处理行', value: nums.num3 },
          { name: '已处理行项', value: nums.num2 },
          { name: '待处理行项', value: nums.num1 },
        ],
        dataRight: [
          { name: '正常行项', value: nums.num3 },
          { name: '异常行项', value: nums.num2 },
          { name: '告警行项', value: nums.num1 },
        ],
      };
      break;
    case '客服下单':
      data = {
        dataLeft: [
          { name: '总处理行', value: nums.num3 },
          { name: '已处理行项', value: nums.num2 },
          { name: '待处理行项', value: nums.num1 },
        ],
        dataRight: [
          { name: '正常行项', value: nums.num3 },
          { name: '异常行项', value: nums.num2 },
          { name: '告警行项', value: nums.num1 },
        ],
      };
      break;
    default:
      data = {
        dataLeft: [
          { name: '总处理行', value: nums.num3 },
          { name: '已处理行项', value: nums.num2 },
          { name: '待处理行项', value: nums.num1 },
        ],
        dataRight: [
          { name: '正常行项', value: nums.num3 },
          { name: '异常行项', value: nums.num2 },
          { name: '告警行项', value: nums.num1 },
        ],
      };
      break;
  }
  return data;
}
function getLeftMidTable() {
  return [
    {
      nodes: '待处理总行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待采购行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待接单行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待发货行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待入库行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待调拨行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
  ];
}
function getLeftMidLine() {
  const nums2 = Mock.mock({
    'num1|200-300': 1, // 生成200到300之间的数字
    'num2|200-300': 1,
    'num3|200-300': 1,
    'num4|200-300': 1,
    'num5|200-300': 1,
    'num6|200-300': 1,
  });
  return {
    bar: [
      { date: '1号', value: nums2.num1 },
      { date: '2号', value: nums2.num2 },
      { date: '3号', value: nums2.num3 },
      { date: '4号', value: nums2.num4 },
      { date: '5号', value: nums2.num5 },
      { date: '6号', value: nums2.num6 },
    ],
    line: [
      { date: '50', value: nums2.num1 + 10 },
      { date: '60', value: nums2.num2 + 10 },
      { date: '70', value: nums2.num3 + 10 },
      { date: '80', value: nums2.num4 + 10 },
      { date: '90', value: nums2.num5 + 10 },
      { date: '00', value: nums2.num6 + 10 },
    ],
  };
}
function getLeftBottomTable() {
  return [
    {
      nodes: '待处理总行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待寻源行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待维护行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待换货行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待换货行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
  ];
}
function getCenterBottomTable() {
  return [
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
    {
      name: '浙江中烟',
      orderNum: '309202992',
      overdue: '3天',
      status: '待开单',
      dealName: '张飒',
      time: '2021.08.12 14:12:12',
    },
  ];
}

function getRightTopTable() {
  return [
    {
      ranking: 'TOP1',
      kpi: '华东',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP2',
      kpi: '华北',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP3',
      kpi: '华中',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP4',
      kpi: '东北',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP5',
      kpi: '西北',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP6',
      kpi: '西南',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP7',
      kpi: '华南',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP8',
      kpi: '新疆',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
  ];
}

function getRightBottomTable() {
  return [
    {
      nodes: '待处理总行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待入库行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待发货行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待妥投行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
    {
      nodes: '待妥投行项',
      amount: '10392',
      alarmAmount: '780',
      abnormalAmount: '982',
      normalAmount: '8630',
      untreatedAbnormalFee: '16.69%',
    },
  ];
}
