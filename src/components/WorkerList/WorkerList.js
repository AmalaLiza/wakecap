import React, { Component } from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import styles from '../../containers/App/App.css';

class WorkerList extends Component {
  render() {
    const workerList = [
      {
        id: 122,
        name: 'Amala',
        designation: 'engineer',
      },
      {
        id: 123,
        name: 'Arjun das',
        designation: 'engineer',
      },
      {
        id: 124,
        name: 'Arjun r',
        designation: 'engineer',
      },
      {
        id: 125,
        name: 'Arjun',
        designation: 'engineer',
      },
      {
        id: 126,
        name: 'Bhavya Jio',
        designation: 'engineer',
      },
      {
        id: 127,
        name: 'Bhavya',
        designation: 'engineer',
      },
      {
        id: 128,
        name: 'Ashith r',
        designation: 'engineer',
      },
      {
        id: 129,
        name: 'Ashith rahul',
        designation: 'engineer',
      },
      {
        id: 120,
        name: 'Arjun',
        designation: 'engineer',
      },
      {
        id: 121,
        name: 'Asith',
        designation: 'engineer',
      }];
    return (
      <div className={classNames(styles.box, styles.sidebar2)}>
        <input type="search" />
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
