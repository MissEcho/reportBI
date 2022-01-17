import React, { PureComponent } from 'react';
import ReactParticleLine from 'react-particle-line';
import animate from 'animate.css';
import { connect } from 'react-redux';
import Header from '@/pages/Header';
import Service from '@/pages/Service';
import ServiceOrder from '@/pages/ServiceOrder';
import ServiceTrend from '@/pages/ServiceTrend';
import Purchase from '@/pages/Purchase';
import Logistics from '@/pages/Logistics';
import Source from '@/pages/Source';
import Abnormal from '@/pages/Abnormal';
import Prescription from '@/pages/Prescription';
import Overview from '@/pages/Overview';
import styles from './index.scss';

const { nodeConfig } = require('../../../mock/nodeConfig');

const getLeftTopByNode = (node, table) => {
  const { text } = node;
  const config = nodeConfig[text].leftTop; // 节点的配置
  const data = table[text].leftTop; // 数据
  switch (config.type) {
    case 'pie':
      return <ServiceOrder header={config.headerText} data={data} />;
      break;
    case 'table':
      return <Service header={config.headerText} data={data} columns={config.columns} />;
      break;
    default:
      return <Service header="客服总览" />;
      break;
  }
};
// left-mid
const getLeftMidByNode = (node, table) => {
  const { text } = node;
  const config = nodeConfig[text].leftMid; // 节点的配置
  const data = table[text].leftMid; // 数据
  switch (config.type) {
    case 'line':
      return <ServiceTrend header={config.headerText} data={data} />;
      break;
    case 'table':
      return <Purchase header={config.headerText} data={data} columns={config.columns} />;
      break;
    default:
      return <Purchase header="客服总览" />;
      break;
  }
};

// left-bottom
const getLeftBottomByNode = (node, table) => {
  const { text } = node;
  const config = nodeConfig[text].leftBottom; // 节点的配置
  const data = table[text].leftBottom; // 数据
  switch (config.type) {
    case 'table':
      return <Source header={config.headerText} data={data} columns={config.columns} />;
      break;
    default:
      return <Source header={config.headerText} data={data} columns={config.columns} />;
      break;
  }
};
// center-bottom
const getCenterBottomByNode = (node, table) => {
  const { text } = node;
  const config = nodeConfig[text].centerBottom; // 节点的配置
  const data = table[text].centerBottom; // 数据
  switch (config.type) {
    case 'table':
      return <Abnormal header={config.headerText} data={data} />;
      break;
    default:
      return <Abnormal header={config.headerText} data={data} />;
      break;
  }
};
// right-bottom
const getRightBottomByNode = (node, table) => {
  const { text } = node;
  const config = nodeConfig[text].rightBottom; // 节点的配置
  const data = table[text].rightBottom; // 数据
  switch (config.type) {
    case 'table':
      return <Logistics header={config.headerText} data={data} columns={config.columns} />;
      break;
    default:
      return <Logistics header={config.headerText} data={data} columns={config.columns} />;
      break;
  }
};
const getRightTopByNode = (node, table) => {
  const { text } = node;
  const config = nodeConfig[text].rightTop; // 节点的配置
  const data = table[text].rightTop; // 数据
  switch (config.type) {
    case 'table':
      return <Prescription header={config.headerText} data={data} columns={config.columns} />;
      break;
    default:
      return <Prescription header={config.headerText} data={data} columns={config.columns} />;
      break;
  }
};

@connect(({ node, table }) => ({
  node,
  table,
}))
export default class index extends PureComponent {
  render() {
    const { node, table } = this.props;
    console.log(node, table);
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.topLeft}>{getLeftTopByNode(node, table)}</div>
          <div className={styles.topLeftBottom}>{getLeftMidByNode(node, table)}</div>
          <div className={`${styles.topCenter} ${animate.animated} ${animate.zoomIn}`}>
            <Overview />
          </div>
          <div className={styles.topRight}>{getRightTopByNode(node, table)}</div>
          <div className={styles.bottomLeft}>{getLeftBottomByNode(node, table)}</div>
          <div className={styles.bottomCenter}>{getCenterBottomByNode(node, table)}</div>
          <div className={styles.bottomRight}>{getRightBottomByNode(node, table)}</div>
        </div>
      </ReactParticleLine>
    );
  }
}
