import React from 'react';
import classNames from 'classnames';
import styles1 from '../../containers/App/App.css';
import styles from './Sidebar.css';
import { sideBarItem } from './Sidebar.constants';
import logo from '../../assets/logo.png';

const Sidebar = () => (
  <nav className={classNames(styles1.sidebar)}>
    <div className={styles.imgWrapper}>
      <img src={logo} width="125" height="75" />
    </div>
    <div className={styles.sideBarItemContainer}>
      {sideBarItem.map(item => (
        <li
          key={item}
          className={classNames(styles.sideBarItemWrapper, { [styles.selected]: item === 'Workers' })}
        >
          <div className={styles.sideBarItem}>{item}</div>
        </li>
      ),
      )}
    </div>
    <button className={styles.emergencyBtn}>
          emergency
    </button>
  </nav>
);

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
