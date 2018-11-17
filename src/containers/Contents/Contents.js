import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Contents.css';
import Avatar from '../../components/Avatar/Avatar';
import SimpleBarChart from '../../components/BarChart/BarChart';
import Clock from '../../assets/clock.png';
import ID from '../../assets/id.png';
import Helmet from '../../assets/helmet.png';
import Helmets from './components/Helmets';

class Contents extends Component {
  render() {
    const { activeWorker } = this.props;
    const { helmets } = activeWorker;
    return (
      <div className={classNames(styles.content)}>
        <section className={styles.section_1}>
          <div className={styles.firstSection}>
            <Avatar avatar={activeWorker} />
            <div className={styles.propertiesWrapper}>
              <div>
                <span className={styles.properties}>Asset ID: </span>
                <span> 3456ERTYU</span>
              </div>
              <div>
                <span>Tag ID: </span>
                <span> 345678</span>
              </div>
            </div>
          </div>
          <Avatar className={styles.supervisor} avatar={activeWorker.supervisor} />
        </section>
        <section className={styles.section_2}>
          <div className={styles.hours}>
            <span>Total hours worked</span>
            <span className={styles.bold}>{Number(`${activeWorker.workingHours.toString()}`).toLocaleString()}</span>
            <span>Last Active Zone</span>
            <span className={styles.bold}>Zone 2</span>
            <button className={styles.history}>Full history</button>
          </div>
          <div className={styles.graph}>
            <SimpleBarChart key={activeWorker.name} />
          </div>
        </section>
        <section className={styles.section_3}>
          <div>
            <h2>Assigned Helmets</h2>
          </div>
          <Helmets helmets={activeWorker.helmets} />
        </section>
      </div>
    );
  }
}

Contents.propTypes = {
  activeWorker: PropTypes.object,
};
Contents.defaultProps = {
  activeWorker: {},
};

export default Contents;
