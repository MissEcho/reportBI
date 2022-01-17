const Mock = require('mockjs');

module.exports = function table222() {
  return {
    // 客服总览
    service: getService(),
    // 采购执行总览
    purchase: [
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
    ],
    overview: getOverview(),
    // 采购寻源总览
    source: [
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
        nodes: '待维护费用行项',
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
    ],
    // 物流总览
    logistics: [
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
    ],
    prescription: getPrescription(),
    effectiveness: {
      // 区域交付时效
      area: [
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
      ],
      // 品类交付时效
      category: [
        {
          ranking: 'TOP1',
          kpi: '家居家纺',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP2',
          kpi: '办公家具',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP3',
          kpi: '办公文具',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP4',
          kpi: '办公用纸',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP5',
          kpi: '电脑数码',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP6',
          kpi: '其他设备耗材',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP7',
          kpi: '惠普设备耗材',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP8',
          kpi: '电器通讯',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP9',
          kpi: '食品饮料',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP10',
          kpi: '消费品',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP11',
          kpi: '安防',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP12',
          kpi: '电气',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP13',
          kpi: '工具',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP14',
          kpi: '化学存储',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP15',
          kpi: '机械流体',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP16',
          kpi: '仪器仪表',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
      ],
      // 分公司
      office: [
        {
          ranking: 'TOP1',
          kpi: '广东',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP2',
          kpi: '广西',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP3',
          kpi: '四川',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP4',
          kpi: '重庆',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP5',
          kpi: '浙江',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP6',
          kpi: '上海',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP7',
          kpi: '陕西',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP8',
          kpi: '河北',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP9',
          kpi: '山东',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP10',
          kpi: '云南',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP11',
          kpi: '贵州',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP12',
          kpi: '新疆',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP13',
          kpi: '西藏',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP14',
          kpi: '甘肃',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP15',
          kpi: '宁夏',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP16',
          kpi: '湖南',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP17',
          kpi: '江西',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP18',
          kpi: '湖北',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP19',
          kpi: '江苏',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP20',
          kpi: '河南',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP21',
          kpi: '安徽',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP22',
          kpi: '天津',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP23',
          kpi: '北京',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP25',
          kpi: '内蒙古',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP26',
          kpi: '黑龙江',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP27',
          kpi: '辽宁',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP28',
          kpi: '吉林',
          month: '61%',
          growth: '-8.6%',
          aveYear: '982',
          target: '75%',
        },
      ],
      // 核心客户
      customer: [
        {
          ranking: 'TOP1',
          kpi: '建行',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP2',
          kpi: '平安',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP3',
          kpi: '国网',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP4',
          kpi: '国电',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP5',
          kpi: '华能',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP6',
          kpi: '中海油',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP7',
          kpi: '国铁',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP8',
          kpi: '邮政',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP9',
          kpi: '邮储',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP10',
          kpi: '南网',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP11',
          kpi: '太保集团',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP12',
          kpi: '移动',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP13',
          kpi: '航天科技',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP14',
          kpi: '能建',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP15',
          kpi: '联通',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP16',
          kpi: '南航',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP17',
          kpi: '大唐',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP18',
          kpi: '华电',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP19',
          kpi: '中石油',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP20',
          kpi: '中节能',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP21',
          kpi: '三峡',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP22',
          kpi: '人保',
          month: '61%',
          growth: -3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP23',
          kpi: '中核工业',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
        {
          ranking: 'TOP25',
          kpi: '太平保险',
          month: '61%',
          growth: 3.6,
          aveYear: '982',
          target: '75%',
        },
      ],
    },
    // 异常播报
    abnormal: [
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
    ],
    nodeAllData: getNodeData(),
  };
};

function getService() {
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
function getOverview() {
  return Mock.mock({
    'sum1|200-300': 1, // 生成200到300之间的数字
    'sum2|200-300': 1,
    'sum3|200-300': 1,
    'sum4|200-300': 1,
    'sum5|1-90': 1,
  });
}
const effectiveness = {
  // 区域交付时效
  area: [
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
  ],
  // 品类交付时效
  category: [
    {
      ranking: 'TOP1',
      kpi: '家居家纺',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP2',
      kpi: '办公家具',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP3',
      kpi: '办公文具',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP4',
      kpi: '办公用纸',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP5',
      kpi: '电脑数码',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP6',
      kpi: '其他设备耗材',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP7',
      kpi: '惠普设备耗材',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP8',
      kpi: '电器通讯',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP9',
      kpi: '食品饮料',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP10',
      kpi: '消费品',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP11',
      kpi: '安防',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP12',
      kpi: '电气',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP13',
      kpi: '工具',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP14',
      kpi: '化学存储',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP15',
      kpi: '机械流体',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP16',
      kpi: '仪器仪表',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
  ],
  // 分公司
  office: [
    {
      ranking: 'TOP1',
      kpi: '广东',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP2',
      kpi: '广西',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP3',
      kpi: '四川',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP4',
      kpi: '重庆',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP5',
      kpi: '浙江',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP6',
      kpi: '上海',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP7',
      kpi: '陕西',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP8',
      kpi: '河北',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP9',
      kpi: '山东',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP10',
      kpi: '云南',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP11',
      kpi: '贵州',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP12',
      kpi: '新疆',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP13',
      kpi: '西藏',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP14',
      kpi: '甘肃',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP15',
      kpi: '宁夏',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP16',
      kpi: '湖南',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP17',
      kpi: '江西',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP18',
      kpi: '湖北',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP19',
      kpi: '江苏',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP20',
      kpi: '河南',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP21',
      kpi: '安徽',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP22',
      kpi: '天津',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP23',
      kpi: '北京',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP25',
      kpi: '内蒙古',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP26',
      kpi: '黑龙江',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP27',
      kpi: '辽宁',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP28',
      kpi: '吉林',
      month: '61%',
      growth: '-8.6%',
      aveYear: '982',
      target: '75%',
    },
  ],
  // 核心客户
  customer: [
    {
      ranking: 'TOP1',
      kpi: '建行',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP2',
      kpi: '平安',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP3',
      kpi: '国网',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP4',
      kpi: '国电',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP5',
      kpi: '华能',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP6',
      kpi: '中海油',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP7',
      kpi: '国铁',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP8',
      kpi: '邮政',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP9',
      kpi: '邮储',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP10',
      kpi: '南网',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP11',
      kpi: '太保集团',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP12',
      kpi: '移动',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP13',
      kpi: '航天科技',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP14',
      kpi: '能建',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP15',
      kpi: '联通',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP16',
      kpi: '南航',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP17',
      kpi: '大唐',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP18',
      kpi: '华电',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP19',
      kpi: '中石油',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP20',
      kpi: '中节能',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP21',
      kpi: '三峡',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP22',
      kpi: '人保',
      month: '61%',
      growth: -3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP23',
      kpi: '中核工业',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
    {
      ranking: 'TOP25',
      kpi: '太平保险',
      month: '61%',
      growth: 3.6,
      aveYear: '982',
      target: '75%',
    },
  ],
};
function getPrescription() {
  // 四种类型；
  const data = {
    area: {
      columns: [
        {
          title: '排名',
          dataIndex: 'ranking',
          width: 75,
        },
        {
          title: '指标名称',
          dataIndex: 'classify',
          width: 70,
        },
        {
          title: '7月份',
          dataIndex: 'month',
          width: 65,
        },
        {
          title: '月同比',
          dataIndex: 'growth',
          width: 65,
        },
        {
          title: '年平均',
          dataIndex: 'aveYear',
          width: 70,
        },
        {
          title: '目标值',
          dataIndex: 'target',
          width: 60,
        },
      ],
      data: effectiveness.area,
    },
    category: {
      columns: [
        {
          title: '排名',
          dataIndex: 'ranking',
          width: 75,
        },
        {
          title: '指标名称',
          dataIndex: 'classify',
          width: 70,
        },
        {
          title: '7月份',
          dataIndex: 'month',
          width: 65,
        },
        {
          title: '月同比',
          dataIndex: 'growth',
          width: 65,
        },
        {
          title: '年平均',
          dataIndex: 'aveYear',
          width: 70,
        },
        {
          title: '目标值',
          dataIndex: 'target',
          width: 60,
        },
      ],
      data: effectiveness.category,
    },
    office: {
      columns: [
        {
          title: '排名',
          dataIndex: 'ranking',
          width: 75,
        },
        {
          title: '指标名称',
          dataIndex: 'classify',
          width: 70,
        },
        {
          title: '7月份',
          dataIndex: 'month',
          width: 65,
        },
        {
          title: '月同比',
          dataIndex: 'growth',
          width: 65,
        },
        {
          title: '年平均',
          dataIndex: 'aveYear',
          width: 70,
        },
        {
          title: '目标值',
          dataIndex: 'target',
          width: 60,
        },
      ],
      data: effectiveness.office,
    },
    customer: {
      columns: [
        {
          title: '排名',
          dataIndex: 'ranking',
          width: 75,
        },
        {
          title: '指标名称',
          dataIndex: 'classify',
          width: 70,
        },
        {
          title: '7月份',
          dataIndex: 'month',
          width: 65,
        },
        {
          title: '月同比',
          dataIndex: 'growth',
          width: 65,
        },
        {
          title: '年平均',
          dataIndex: 'aveYear',
          width: 70,
        },
        {
          title: '目标值',
          dataIndex: 'target',
          width: 60,
        },
      ],
      data: effectiveness.customer,
    },
  };
  return data;
}

function getNodeData() {
  const nums = getThreeNum();
  const nums2 = getSixNum();
  return {
    客户下单: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
        fun: () => {
          return null;
        },
        data: {
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
        },
      },
      leftMid: {
        headerText: '客户下单左中',
        type: 'line',
        data: {
          bar: [
            { date: '1号', value: nums2.num1 },
            { date: '2号', value: nums2.num2 },
            { date: '3', value: nums2.num3 },
            { date: '4', value: nums2.num4 },
            { date: '5', value: nums2.num5 },
            { date: '6', value: nums2.num6 },
          ],
          line: [
            { date: '50', value: nums2.num1 + 10 },
            { date: '60', value: nums2.num2 + 10 },
            { date: '70', value: nums2.num3 + 10 },
            { date: '80', value: nums2.num4 + 10 },
            { date: '90', value: nums2.num5 + 10 },
            { date: '00', value: nums2.num6 + 10 },
          ],
        },
      },
      leftBottom: {
        headerText: '客户下单左下',
        type: 'table',
        columns: [
          {
            title: '监控节点',
            dataIndex: 'nodes',
            width: 75,
          },
          {
            title: '总行项数',
            dataIndex: 'amount',
            width: 70,
          },
          {
            title: '告警行项',
            dataIndex: 'alarmAmount',
            width: 65,
          },
          {
            title: '异常行项',
            dataIndex: 'abnormalAmount',
            width: 65,
          },
          {
            title: '正常行项',
            dataIndex: 'normalAmount',
            width: 70,
          },
          {
            title: '异常率',
            dataIndex: 'untreatedAbnormalFee',
            width: 60,
          },
        ],
        data: {
          bar: [
            { date: '1号', value: nums2.num1 },
            { date: '2号', value: nums2.num2 },
            { date: '3', value: nums2.num3 },
            { date: '4', value: nums2.num4 },
            { date: '5', value: nums2.num5 },
            { date: '6', value: nums2.num6 },
          ],
          line: [
            { date: '50', value: nums2.num1 + 10 },
            { date: '60', value: nums2.num2 + 10 },
            { date: '70', value: nums2.num3 + 10 },
            { date: '80', value: nums2.num4 + 10 },
            { date: '90', value: nums2.num5 + 10 },
            { date: '00', value: nums2.num6 + 10 },
          ],
        },
      },
    },
    客户开单: {
      leftTop: {
        headerText: '客户开单概览',
        type: 'pie',
        data: {
          dataLeft: [
            { name: '总开单行', value: nums.num3 },
            { name: '已处理行项', value: nums.num2 },
            { name: '待处理行项', value: nums.num1 },
          ],
          dataRight: [
            { name: '正常行项', value: nums.num3 },
            { name: '异常行项', value: nums.num2 },
            { name: '告警行项', value: nums.num1 },
          ],
        },
      },
    },
    default: {},
  };
}

function getThreeNum() {
  const numbers = Mock.mock({
    'num1|200-300': 1, // 生成200到300之间的数字
    'num2|200-300': 1,
  });
  numbers.num3 = numbers.num1 + numbers.num2;
  return numbers;
}

function getSixNum() {
  const numbers = Mock.mock({
    'num1|200-300': 1, // 生成200到300之间的数字
    'num2|200-300': 1,
    'num3|200-300': 1,
    'num4|200-300': 1,
    'num5|200-300': 1,
    'num6|200-300': 1,
  });
  return numbers;
}