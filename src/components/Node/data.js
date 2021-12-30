
const node = {
  nodes: [{
    id: 'node1',
    x: 20,
    y: 150,
    "class": "客户\n下单",
    // color: '#fff',//node节点边框的颜色
    label: "客户\n下单",

  }, {
    id: 'node2',
    x: 100,
    y: 150,
    "class": "客服\n确认",
    "label": "客服\n确认",
    name:'abnormal',
  }, {
    id: 'node3',
    x: 180,
    y: 150,
    "class": "客服\n开单",
    "label": "客服\n开单",
  }, {
    id: 'node4',
    x: 280,
    y: 150,
    "class": "客服\n传送",
    "label": "客服\n传送"
  }, {
    id: 'node5',
    x: 380,
    y: 150,
    name:'warning',
    "class": "仓库\n发货",
    "label": "仓库\n发货"
  }, {
    id: 'node6',
    x: 380,
    y: 50,
    "class": "客户\n签收",
    "label": "客户\n签收"
  }, {
    id: 'node7',
    x: 500,
    y: 50,
    "class": "客户\n妥投",
    "label": "客户\n妥投"
  }, {
    id: 'node8',
    x: 180,
    y: 280,
    "class": "采购\n寻源",
    name:'abnormal',
    "label": "采购\n寻源"
  }, {
    id: 'node9',
    x: 280,
    y: 280,
    name:'warning',
    "class": "采购\n下单",
    "label": "采购\n下单"
  }, {
    id: 'node10',
    x: 380,
    y: 280,
    "class": "供应商\n接单",
    name:'warning',
    "label": "供应商\n接单"
  }, {
    id: 'node11',
    x: 500,
    y: 280,
    "class": "供应商\n发货",
    "label": "供应商\n发货"
  }, {
    id: 'node12',
    x: 500,
    y: 150,
    "class": "采购\n入库",
    "label": "采购\n入库"
  }, {
    id: 'node13',
    x: 380,
    y: 400,
    "class": "换货\n申请",
    "label": "换货\n申请"
  }, {
    id: 'node14',
    x: 180,
    y: 400,
    "class": "换货\n审核",
    "label": "换货\n审核",
    name:'abnormal'
  }],
  edges: [{
    id: 'edge1',
    target: 'node2',
    source: 'node1',
    calc: true,
    // color: '#ff0000',
    style: {
      stroke: '#7CD13B', //节点之间连线的样式
    }
  },
  {
    id: 'edge2',
    target: 'node3',
    source: 'node2',
    calc: true,
    // color: '#00FF00'
  }, {
    id: 'edge3',
    target: 'node4',
    source: 'node3',
    calc: true,
    // color: '#00FF00'
  }, {
    id: 'edge4',
    target: 'node5',
    isrunning: true,
    source: 'node4',
    calc: true,
    // color: '#00FF00'
  }, {
    id: 'edge5',
    target: 'node6',
    source: 'node5',
    color: '#00FF00',
    calc: true,
  }, {
    id: 'edge6',
    target: 'node7',
    source: 'node6',
    isrunning: true,
    color: '#00FF00',
    calc: true,
  }, {
    id: 'edge7',
    target: 'node8',
    source: 'node3',
    color: '#00FF00',
    calc: true,
  }, {
    id: 'edge8',
    target: 'node9',
    source: 'node8',
    color: '#00FF00',
    calc: true,
  }, {
    id: 'edge9',
    target: 'node10',
    source: 'node9',
    color: '#00FF00',
    isrunning: true,
    calc: true,
  }, {
    id: 'edge10',
    target: 'node11',
    source: 'node10',
    color: '#00FF00',
    calc: true
  }, {
    id: 'edge11',
    target: 'node12',
    source: 'node11',
    color: '#00FF00',
    calc: true,
  }, {
    id: 'edge13',
    target: 'node13',
    source: 'node10',
    color: '#00FF00',
    isrunning: true,
    calc: true,
  }, {
    id: 'edge14',
    target: 'node14',
    source: 'node13',
    color: '#00FF00',
    isrunning: true,
    calc: true,
  }, {
    id: 'edge15',
    target: 'node8',
    source: 'node14',
    // color: '#FF0000',
    calc: true,
  }, {
    id: 'edge16',
    target: 'node5',
    source: 'node12',
    // color: '#FF0000',
    calc: true,
  }]
}
module.exports = node