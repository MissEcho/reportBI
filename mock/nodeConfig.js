const Mock = require('mockjs');

module.exports = function nodeConfig() {
  const nums = getThreeNum();
  const nums2 = getSixNum();
  return {
    客户下单: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    客服确认: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    客服开单: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    客服传送: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    仓库发货: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    客户签收: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    客户妥投: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    采购寻源: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    采购下单: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    供应商接单: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    供应商发货: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    物流签收: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    仓库入库: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    换货申请: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
    换货审核: {
      leftTop: {
        headerText: '客户下单概览',
        type: 'pie',
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
      centerBottom: {
        headerText: '客户下单底下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
      rightTop: {
        headerText: '客户下单右上',
        type: 'table',
        columns: [],
        data: [],
      },
      rightBottom: {
        headerText: '客户下单右下',
        type: 'table',
        columns: [],
        data: [
          {
            name: '浙江中烟',
            orderNum: '309202992',
            overdue: '3天',
            status: '待开单',
            dealName: '张飒',
            time: '2021.08.12 14:12:12',
          },
        ],
      },
    },
  };
};

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
