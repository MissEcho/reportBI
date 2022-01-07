import React, { PureComponent } from 'react';
import ReactParticleLine from 'react-particle-line';
import Header from '@/pages/Header';


import styles from './index.scss';

export default class index extends PureComponent {
  render() {
    return (
      <ReactParticleLine>
        <div className={styles.container}>
          <div className={styles.header}>
            <Header />
          </div>
        </div>
      </ReactParticleLine>
    );
  }
}