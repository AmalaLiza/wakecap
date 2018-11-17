import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Contents.css';
import Avatar from '../../components/Avatar/Avatar';
import SimpleBarChart from "../../components/BarChart/BarChart";

class Contents extends Component {
  render() {
    let { user } = this.props;
    const helmets = [
      {
        name: 'Current User',
        days: 2,
      },
      {
        name: 'Current User',
        days: 3,
      },
    ];
    user = {
      name: 'Current User',
      designation: 'Designation',
    };
    const supervisor = {
      name: 'Current User',
      designation: 'Designation',
    };
    return (
      <div className={classNames(styles.content)}>
        <section className={styles.section_1}>
          <div className={styles.firstSection}>
            <Avatar avatar={user} />
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
          <Avatar className={styles.supervisor} avatar={supervisor} />
        </section>
        <section className={styles.section_2}>
          <div className={styles.hours}>
            <span>Total hours worked</span>
            <span className={styles.bold}>{Number('2345').toLocaleString()}</span>
            <span>Last Active Zone</span>
            <span className={styles.bold}>Zone 2</span>
            <button className={styles.history}>Full history</button>
          </div>
          <div className={styles.graph}>
            <SimpleBarChart />
          </div>
        </section>
        <section className={styles.section_3}>
          <div>
            <h2>Assigned Helmets</h2>
          </div>
                    `
          <div className={styles.boxWrapper}>
            {helmets.map(helmet => (
              <div className={styles.box}>
                <span>Icon 123456789</span>
                <span>Icon In-123</span>
                <span>
                  {`Icon${helmet.days} days ago`}
                </span>
              </div>
            ))}
            <button className={styles.plus}>+</button>
          </div>
        </section>
      </div>
    );
  }
}

Contents.propTypes = {};
Contents.defaultProps = {};

export default Contents;
