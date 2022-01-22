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
      rightTop: getRightTopTable('客户下单'),
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
      leftBottom: getLeftBottomTable('采购下单'),
      centerBottom: getCenterBottomTable('采购下单'),
      rightTop: getRightTopTable('采购下单'),
      rightBottom: getRightBottomTable('采购下单'),
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
function getLeftTopPie(text) {
  const nums = Mock.mock({
    'num1|200-300': 1, // 生成200到300之间的数字
    'num2|200-300': 1,
  });
  nums.num3 = nums.num1 + nums.num2;
  let data = {};
  switch (text) {
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
    case '采购下单':
      data = {
        dataLeft: [
          { name: '总获取行项', value: nums.num3 },
          { name: '待采购行项', value: nums.num2 },
          { name: '已采购行项', value: nums.num1 },
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
function getLeftBottomTable(text) {
  let data = [];
  const lines = Mock.mock({
    'line1|200-300': 1, // 待采购行项
    'line2|200-300': 1, // 已采购行项
    'line3|100-200': 1, // 超时行项
    'line4|1-200': 0.23, // 下单时效
  });
  lines.total = lines.line1 + lines.line2;
  lines.rate = `${(lines.line3 / lines.total).toFixed(2) * 100}%`;
  switch (text) {
    case '采购下单':
      data = [
        {
          nodes: '张飒', // 姓名
          amount: lines.total, // 总行项
          alarmAmount: lines.line1, // 待采购行项
          abnormalAmount: lines.line3, // 超时行项
          normalAmount: lines.line4, // 下单时效
          untreatedAbnormalFee: lines.rate, // 异常率
        },
        {
          nodes: '徐英瑶',
          amount: lines.total, // 总行项
          alarmAmount: lines.line1, // 待采购行项
          abnormalAmount: lines.line3, // 超时行项
          normalAmount: lines.line4, // 下单时效
          untreatedAbnormalFee: lines.rate, // 异常率
        },
        {
          nodes: '查瑶',
          amount: lines.total, // 总行项
          alarmAmount: lines.line1, // 待采购行项
          abnormalAmount: lines.line3, // 超时行项
          normalAmount: lines.line4, // 下单时效
          untreatedAbnormalFee: lines.rate, // 异常率
        },
        {
          nodes: '应泽峰',
          amount: lines.total, // 总行项
          alarmAmount: lines.line1, // 待采购行项
          abnormalAmount: lines.line3, // 超时行项
          normalAmount: lines.line4, // 下单时效
          untreatedAbnormalFee: lines.rate, // 异常率
        },
        {
          nodes: '姜莹',
          amount: lines.total, // 总行项
          alarmAmount: lines.line1, // 待采购行项
          abnormalAmount: lines.line3, // 超时行项
          normalAmount: lines.line4, // 下单时效
          untreatedAbnormalFee: lines.rate, // 异常率
        },
      ];
      break;
    default:
      data = [
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
  return data;
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
const _getRightTopTableData = item => {
  const lines = Mock.mock({
    'line1|200-300': 1, // 待采购行项
    'line2|200-300': 1, // 已采购行项
    'line3|100-400': 1, // 超时行项
    'line4|1-200.2-2': 1, // 下单时效
  });
  lines.total = lines.line1 + lines.line2;
  lines.rate = parseInt((lines.line3 / lines.total).toFixed(2) * 100);

  return {
    ranking: item, // 品类名称
    kpi: lines.total, // 总行项
    month: lines.line1, // 待采购行项.
    growth: lines.line4, // 下单时效
    aveYear: lines.line3, // 超时行项
    target: lines.rate, // 超时率
  };
};
function getRightTopTable(text) {
  let data = [];
  switch (text) {
    case '客户下单':
      data = [
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
      break;
    case '采购下单':
      const arr = [
        '家居家纺',
        '办公家具',
        '办公文具',
        '办公用纸',
        '电脑数码',
        '其他设备耗材',
        '电器通讯',
        '食品饮料',
        '消费品',
        '安防',
        '电气',
        '工具',
        '化学存储',
        '机械流体',
        '仪器仪表',
      ];
      for (let i = 0; i < arr.length; i++) {
        data.push(_getRightTopTableData(arr[i]));
      }
      break;
    default:
      data = [
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
      break;
  }
  return data;
}

function getRightBottomTable(text) {
  let data = [];
  const lines = Mock.mock({
    'line1|200-300': 1, // 待采购行项
    'line2|200-300': 1, // 已采购行项
    'line3|100-200': 1, // 超时行项
    'line4|1-200': 0.23, // 下单时效
  });
  lines.total = lines.line1 + lines.line2;
  lines.rate = `${(lines.line3 / lines.total).toFixed(2) * 100}%`;
  switch (text) {
    case '采购下单':
      data = [
        {
          nodes: '客户订单信息确认中', // 未采购原因
          amount: lines.total, // 未采购行项
          alarmAmount: lines.line1, // 未采购率
          abnormalAmount: lines.line3, // 紧急程度
          normalAmount: null, // 下单时效
          untreatedAbnormalFee: null, // 异常率
        },
        {
          nodes: '次日可完成下单', // 未采购原因
          amount: lines.total, // 未采购行项
          alarmAmount: lines.line1, // 未采购率
          abnormalAmount: lines.line3, // 紧急程度
          normalAmount: null, // 下单时效
          untreatedAbnormalFee: null, // 异常率
        },
        {
          nodes: '客户不接受替换方案，原单寻源中', // 未采购原因
          amount: lines.total, // 未采购行项
          alarmAmount: lines.line1, // 未采购率
          abnormalAmount: lines.line3, // 紧急程度
          normalAmount: null, // 下单时效
          untreatedAbnormalFee: null, // 异常率
        },
        {
          nodes: '已提供停产/缺货证明，客户沟通中', // 未采购原因
          amount: lines.total, // 未采购行项
          alarmAmount: lines.line1, // 未采购率
          abnormalAmount: lines.line3, // 紧急程度
          normalAmount: null, // 下单时效
          untreatedAbnormalFee: null, // 异常率
        },
        {
          nodes: '无替换方案，需重新寻源', // 未采购原因
          amount: lines.total, // 未采购行项
          alarmAmount: lines.line1, // 未采购率
          abnormalAmount: lines.line3, // 紧急程度
          normalAmount: null, // 下单时效
          untreatedAbnormalFee: null, // 异常率
        },
      ];
      break;
    default:
      data = [
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
  return data;
}
