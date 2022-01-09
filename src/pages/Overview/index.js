import React, { memo, PureComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import ScrollNum from '@/components/ScrollNum';
import Node from '@/components/Node';

import styles from './index.scss';
@connect(({ table }) => ({
  table,
}))
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  nodeClick = node => {
    this.props.dispatch({ type: 'saveNode', payload: node });
  };

  render() {
    const { table } = this.props;
    const { sum1, sum2, sum3, sum4, sum5 } = table.overview;

    return (
      <div className={styles.overview}>
        <div className={styles.top}>
          <div>
            <ScrollNum numbers={sum1} style={{ color: '#ffffff' }} />
            <p>总执行单量</p>
          </div>
          <div>
            <ScrollNum numbers={sum2} style={{ color: '#ff0000' }} />
            <p>异常单量</p>
          </div>
          <div>
            <ScrollNum numbers={sum3} style={{ color: '#FFCC00' }} />
            <p>告警单量</p>
          </div>
          <div>
            <ScrollNum numbers={sum4} style={{ color: '#00FF00' }} />
            <p>正常单量</p>
          </div>
          <div>
            <ScrollNum numbers={sum5} type="percent" style={{ color: '#ffffff' }} />
            <p>未处理异常率</p>
          </div>
        </div>
        <div className={styles.graph}>
          <Node nodeClick={this.nodeClick}> </Node>
          <div className={styles.legend}>
            <p className={styles.abnormal}>
              <span />
              {' '}
异常：超2小时未处理订单
            </p>
            <p className={styles.warning}>
              <span />
              {' '}
告警：超1小时未处理订单
            </p>
            <p className={styles.normal}>
              <span />
              {' '}
正常：未超时处理订单
            </p>
          </div>
        </div>
      </div>
    );
  }
}
