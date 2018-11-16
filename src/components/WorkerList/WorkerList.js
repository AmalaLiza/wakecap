import React, { Component } from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import mainStyle from '../../containers/App/App.css';
import { workerList } from './WorkList.constants';
import styles from './WorkerList.css';

class WorkerList extends Component {
  render() {
    return (
      <div className={classNames(mainStyle.box, mainStyle.sidebar2)}>
        <div className={styles.searchWrapper}>
          <input type="search" className={styles.input} />
        </div>
        {workerList.map(worker => (
          <Avatar
            avatar={worker}
            showIdNumber
          />
        ))}
        <div>
            <button>Prev</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>Next</button>
        </div>
      </div>
    );
  }
}

WorkerList.propTypes = {};
WorkerList.defaultProps = {};

export default WorkerList;
