import React, { PureComponent } from 'react';
import ReactParticleLine from 'react-particle-line';
import animate from 'animate.css';
import Header from '@/pages/Header';
import Equipment from '@/pages/Equipment';
import Map from '@/pages/Map';
import Loan from '@/pages/Loan';
import Customer from '@/pages/Customer';
import Product from '@/pages/Product';
import Trading from '@/pages/Trading';
import Service from '@/pages/Service';
import Purchase from '@/pages/Purchase';
import Logistics from '@/pages/Logistics';
import Source from '@/pages/Source';
import Abnormal from '@/pages/Abnormal';
import Prescription from '@/pages/Prescription';
import Overview from '@/pages/Overview';


import styles from './index.scss';

export default class index extends PureComponent {
  render() {
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.topLeft}>
            {/* <Equipment /> */}
            <Service />
          </div>
          <div className={styles.topLeftBottom}>
            <Purchase />
            {/* <Loan /> */}
          </div>
          <div className={`${styles.topCenter} ${animate.animated} ${animate.zoomIn}`}>
            <Overview />

          </div>
          <div className={styles.topRight}>
            <Prescription />
            {/* <Loan /> */}
          </div>
          <div className={styles.bottomLeft}>
            <Source />
            {/* <Customer /> */}
          </div>
          <div className={styles.bottomCenter}>
            <Abnormal />
            {/* <Product /> */}
          </div>
          <div className={styles.bottomRight}>
            <Logistics />
            {/* <Trading /> */}
          </div>
        </div>
      </ReactParticleLine>
    );
  }
}
