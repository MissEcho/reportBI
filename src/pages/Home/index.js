import React, { PureComponent } from 'react';
import ReactParticleLine from 'react-particle-line';
import animate from 'animate.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
// left-top
const getLeftTopByNode = node => {
  const {text} = node;
  switch (text) {
    case '客户下单':
      return <ServiceOrder header="客户下单" />;
      break;
    case '客户确认':
      return <ServiceOrder header="客户确认2" />;
      break;
    default:
      return <Service header="客服总览" />;
      break;
  }
};
// left-mid
const getLeftMidByNode = node => {
  const {text} = node;
  switch (text) {
    case '客户下单':
      return <ServiceTrend />;
      break;
    default:
      return <Purchase />;
      break;
  }
};
const getLeftBottomByNode = node => {
  const {text} = node;
  switch (text) {
    case 'node1':
      return <Source />;
      break;
    default:
      return <Source />;
      break;
  }
};
const getCenterBottomByNode = node => {
  const {text} = node;
  switch (text) {
    case 'node1':
      return <Abnormal />;
      break;
    default:
      return <Abnormal />;
      break;
  }
};
const getRightBottomByNode = node => {
  const {text} = node;
  switch (text) {
    case 'node1':
      return <Logistics />;
      break;
    default:
      return <Logistics />;
      break;
  }
};
const getNodeType = node => {
  const map = {
    客服确认: 'area', // 区域——默认
    客服开单: 'office', // 分公司
    采购下单: 'category', // 品类
    客户下单: 'customer', // 客户组
  };
  return map[node.text] || 'area';
};
@connect(({ node }) => ({
  node,
}))
export default class index extends PureComponent {
  render() {
    const { node } = this.props;
    const nodeType = getNodeType(node);
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.header}>
            <Link to="/analysis" title="分析" />
            <Header />
          </div>
          <div className={styles.topLeft}>{getLeftTopByNode(node)}</div>
          <div className={styles.topLeftBottom}>{getLeftMidByNode(node)}</div>
          <div className={`${styles.topCenter} ${animate.animated} ${animate.zoomIn}`}>
            <Overview />
          </div>
          <div className={styles.topRight}>
            <Prescription nodeType={nodeType} />
          </div>
          <div className={styles.bottomLeft}>{getLeftBottomByNode(node)}</div>
          <div className={styles.bottomCenter}>{getCenterBottomByNode(node)}</div>
          <div className={styles.bottomRight}>{getRightBottomByNode(node)}</div>
        </div>
      </ReactParticleLine>
    );
  }
}
