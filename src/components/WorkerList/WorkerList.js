import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import mainStyle from '../../containers/App/App.css';
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
    const { workerList, onClick } = this.props;
    return (
      <div className={classNames(mainStyle.sidebar2)}>
        <div>
          <input type="search" placeholder="search workers" className={styles.input} onChange={this.handleChange} />
        </div>
        <div className={styles.workerListWrapper}>
          {workerList.filter(worker => worker.name.toLowerCase()
            .includes(searchText.toLowerCase())).map(worker => (
              <Avatar
                onClick={onClick}
                key={worker.name}
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

WorkerList.propTypes = {
  workerList: PropTypes.array,
  onClick: PropTypes.func,
};

WorkerList.defaultProps = {
  workerList: [],
  onClick: f => (f),
};

export default WorkerList;
