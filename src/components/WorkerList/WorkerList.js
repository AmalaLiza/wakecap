import React, { Component } from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import mainStyle from '../../containers/App/App.css';
import { workerList } from './WorkList.constants';
import styles from './WorkerList.css';

class WorkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className={classNames(mainStyle.sidebar2)}>
        <div>
          <input type="search" placeholder="search workers" className={styles.input} onChange={this.handleChange} />
        </div>
        <div className={styles.workerListWrapper}>
          {workerList.filter(worker => worker.name.includes(searchText)).map(worker => (
            <Avatar
              avatar={worker}
              showIdNumber
            />
          ))}
        </div>
        <div className={styles.paginationBtnWrapper}>
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
