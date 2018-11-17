import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../Contents/Contents';
import WorkerList from '../../components/WorkerList/WorkerList';
import Header from '../../components/Header/Header';
import workerList from './App.constants';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeWorker: {
        id: 122,
        name: 'Chris Sanford',
        designation: 'engineer',
        supervisor: { name: 'James Bond' },
        workingHours: 2345,
        helmets: [
          {
            id: 300000567,
            days: 2,
          },
          {
            id: 9876547,
            days: 3,
          },
        ],
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(worker) {
    worker.selected = true;
    this.setState({ activeWorker: worker });
  }

  render() {
    const { activeWorker } = this.state;
    return (
      <div className={styles.wrapper}>
        <Header />
        <Sidebar />
        <WorkerList workerList={workerList} onClick={this.handleClick} />
        <Content activeWorker={activeWorker} />
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(App);
