import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Header.css';
import Avatar from '../Avatar/Avatar';

class Header extends Component {
  render() {
    return (
      <div className={classNames(styles.header)}>
        <div className={styles.item}>
          <div className={styles.heading}>WORKERS</div>
          <div className={styles.overview}>Overview</div>
        </div>
        <div className={styles.item}>
          <select className={styles.dropdown}>
            <option defaultValue="Select Site" hidden>Select Site</option>
            <option>Zone 1</option>
            <option>Zone 2</option>
            <option>Zone 3</option>
          </select>
        </div>
        <div className={styles.item}>
          <Avatar />
        </div>
      </div>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
