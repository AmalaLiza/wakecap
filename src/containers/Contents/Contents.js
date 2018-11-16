import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Contents.css';
import Avatar from '../../components/Avatar/Avatar';

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
            <div>
              <span>Asset ID</span>
              {' '}
:
              <span>3456ERTYU</span>
              <span>Tag ID</span>
              {' '}
:
              <span>345678</span>
            </div>
          </div>
          <Avatar className={styles.supervisor} avatar={supervisor} />
        </section>
        <section>
          <div>
            <span>Total hours worked</span>
            <span>2345</span>
            <span>Last Active Zone</span>
            <span>Zone 2</span>
            <button>Full history</button>
          </div>
          <div>
                        Graph Here
          </div>
        </section>
        <section className={styles.section_3}>
          {helmets.map(helmet => (
            <div className={styles.box}>
              <span>Icon</span>
              <span>123456789</span>
              <span>Icon</span>
              <span>In-123</span>
              <span>Icon</span>
              {' '}
              <span>
                {helmet.days}
                {' '}
                          days ago
              </span>
            </div>
          ))}
        </section>
        <button>+</button>
        <section />
      </div>
    );
  }
}

Contents.propTypes = {};
Contents.defaultProps = {};

export default Contents;
