// 结构，列的名字，header的名字，
export const nodeConfig = {
  default: {
    leftTop: {
      headerText: '客户概览',
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
    },
    leftMid: {
      headerText: '采购执行交付总览',
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
    },
    leftBottom: {
      headerText: '采购总览',
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
    },
    centerBottom: {
      headerText: '异常订单滚动播报',
      type: 'table',
    },
    rightTop: {
      headerText: '交付时效排行榜',
      type: 'table',
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
    },
    rightBottom: {
      headerText: '物流总览',
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
    },
  },
  客户下单: {
    leftTop: {
      headerText: '客户下单概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7天客户下单趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '紧急承诺订单',
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
    },
    centerBottom: {
      headerText: '客户异常订单',
      type: 'table',
    },
    rightTop: {
      headerText: '分公司下单量排行榜',
      type: 'table',
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
    },
    rightBottom: {
      headerText: '核心客户下单数据',
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
    },
  },
  客服确认: {
    leftTop: {
      headerText: '客户确认概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7天确认趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '客服确认排行榜',
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
    },
    centerBottom: {
      headerText: '异常确定订单预警',
      type: 'table',
    },
    rightTop: {
      headerText: '分公司确认时效排行榜',
      type: 'table',
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
    },
    rightBottom: {
      headerText: '核心客户确认数据',
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
    },
  },
  客服开单: {
    leftTop: {
      headerText: '客服开单概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7天客服开单趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '客服开单排行榜',
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
    },
    centerBottom: {
      headerText: '异常开单订单预警',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '分公司开单预警',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '核心客户组开单数据',
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
    },
  },
  客服传送: {
    leftTop: {
      headerText: '客户传送概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日传送趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '客服传送排行榜',
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
    },
    centerBottom: {
      headerText: '异常传送订单预警',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '客户下单右上',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '客户下单右下',
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
    },
  },
  仓库发货: {
    leftTop: {
      headerText: '仓库发货概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7天仓库发货趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '仓管员发货排行榜',
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
    },
    centerBottom: {
      headerText: '异常发货订单预警',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '仓库发货排行榜',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '核心客户组发货数据',
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
    },
  },
  客户签收: {
    leftTop: {
      headerText: '客户签收概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日客户签收趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '紧急承诺订单签收情况',
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
    },
    centerBottom: {
      headerText: '异常签收订单情况',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '分公司签收排行榜',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '核心客户签收数据',
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
    },
  },
  客户妥投: {
    leftTop: {
      headerText: '客户妥投概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日客户妥投趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '紧急承诺订单妥投情况',
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
    },
    centerBottom: {
      headerText: '异常妥投订单情况',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '分公司妥投排行榜',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '核心客户妥投数据',
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
    },
  },
  采购寻源: {
    leftTop: {
      headerText: '采购寻源概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日采购寻源趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '采购员寻源时效排行榜',
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
    },
    centerBottom: {
      headerText: '异常寻源订单预警',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '品类寻源排行榜',
      type: 'table',
      columns: [
        {
          title: '品类名称',
          dataIndex: 'ranking',
          width: 75,
        },
        {
          title: '总行数',
          dataIndex: 'classify',
          width: 70,
        },
        {
          title: '待采购行数',
          dataIndex: 'month',
          width: 65,
        },
        {
          title: '下单时效',
          dataIndex: 'growth',
          width: 65,
        },
        {
          title: '超时行项',
          dataIndex: 'aveYear',
          width: 70,
        },
        {
          title: '超时率',
          dataIndex: 'target',
          width: 60,
        },
      ],
    },
    rightBottom: {
      headerText: '供应商拒单排行榜',
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
    },
  },
  采购下单: {
    leftTop: {
      headerText: '采购下单概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日采购下单趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '采购执行员下单排行榜',
      type: 'table',
      columns: [
        {
          title: '姓名',
          dataIndex: 'nodes',
          width: 75,
        },
        {
          title: '总行项数',
          dataIndex: 'amount',
          width: 70,
        },
        {
          title: '待采购行项',
          dataIndex: 'alarmAmount',
          width: 65,
        },
        {
          title: '异常行项',
          dataIndex: 'abnormalAmount',
          width: 65,
        },
        {
          title: '下单时效(h)',
          dataIndex: 'normalAmount',
          width: 70,
        },
        {
          title: '异常率',
          dataIndex: 'untreatedAbnormalFee',
          width: 60,
        },
      ],
    },
    centerBottom: {
      headerText: '异常采购下单排行榜',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '品类采购下单排行榜',
      type: 'table',
      columns: [
        {
          title: '品类名称',
          dataIndex: 'ranking',
          width: 75,
        },
        {
          title: '总行数',
          dataIndex: 'TotalLineItem',
          width: 70,
        },
        {
          title: '待采购行数',
          dataIndex: 'month',
          width: 65,
        },
        {
          title: '下单时效(h)',
          dataIndex: 'growth',
          width: 65,
        },
        {
          title: '超时行项',
          dataIndex: 'aveYear',
          width: 70,
        },
        {
          title: '超时率',
          dataIndex: 'target',
          width: 60,
        },
      ],
    },
    rightBottom: {
      headerText: '未采购原因',
      type: 'table',
      columns: [
        {
          title: '未采购原因',
          dataIndex: 'nodes',
          width: 200,
        },
        {
          title: '未采购行项',
          dataIndex: 'amount',
          width: 70,
        },
        {
          title: '未采购占比',
          dataIndex: 'alarmAmount',
          width: 70,
        },
        {
          title: '警告程度',
          dataIndex: 'abnormalAmount',
          width: 70,
        },
      ],
    },
  },
  供应商接单: {
    leftTop: {
      headerText: '供应商接单概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日供应商接单量趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '供应商拒单分析',
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
    },
    centerBottom: {
      headerText: '异常供应商接单预警',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '供应商接单排行榜',
      type: 'table',
      columns: [
        {
          title: '供应商名称',
          dataIndex: 'ranking',
          width: 75,
        },
        {
          title: '总采购单数',
          dataIndex: 'classify',
          width: 70,
        },
        {
          title: '待接单数',
          dataIndex: 'month',
          width: 65,
        },
        {
          title: '接单时效',
          dataIndex: 'growth',
          width: 65,
        },
        {
          title: '超时未接单数',
          dataIndex: 'aveYear',
          width: 70,
        },
        {
          title: '超时率',
          dataIndex: 'target',
          width: 60,
        },
      ],
    },
    rightBottom: {
      headerText: '品类接单排行榜',
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
    },
  },
  供应商发货: {
    leftTop: {
      headerText: '供应商发货概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日供应商发货量趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '供应商拒单',
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
    },
    centerBottom: {
      headerText: '异常供应商发货预警',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '供应商发货排行榜',
      type: 'table',
      columns: [
        {
          title: '供应商名称',
          dataIndex: 'ranking',
          width: 75,
        },
        {
          title: '总发货行数',
          dataIndex: 'classify',
          width: 70,
        },
        {
          title: '待发货行数',
          dataIndex: 'month',
          width: 65,
        },
        {
          title: '发货时效',
          dataIndex: 'growth',
          width: 65,
        },
        {
          title: '超时行项',
          dataIndex: 'aveYear',
          width: 70,
        },
        {
          title: '超时率',
          dataIndex: 'target',
          width: 60,
        },
      ],
    },
    rightBottom: {
      headerText: '品类发货排行榜',
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
    },
  },
  物流签收: {
    leftTop: {
      headerText: '物流签收概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日物流签收趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '供应商准时交货排行榜',
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
    },
    centerBottom: {
      headerText: '异常签收订单预警',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '仓库物流签收排行榜',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '物流公司配送时效',
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
    },
  },
  仓库入库: {
    leftTop: {
      headerText: '仓库入库概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '近7日仓库入库趋势',
      type: 'line',
    },
    leftBottom: {
      headerText: '等待填写',
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
    },
    centerBottom: {
      headerText: '异常仓库入库预警',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '仓库入库排行榜',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '到货异常分析',
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
    },
  },
  换货申请: {
    leftTop: {
      headerText: '客户下单概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '客户下单左中',
      type: 'line',
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
    },
    centerBottom: {
      headerText: '客户下单底下',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '客户下单右上',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '客户下单右下',
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
    },
  },
  换货审核: {
    leftTop: {
      headerText: '客户下单概览',
      type: 'pie',
    },
    leftMid: {
      headerText: '客户下单左中',
      type: 'line',
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
    },
    centerBottom: {
      headerText: '客户下单底下',
      type: 'table',
      columns: [],
    },
    rightTop: {
      headerText: '客户下单右上',
      type: 'table',
      columns: [],
    },
    rightBottom: {
      headerText: '客户下单右下',
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
    },
  },
};
