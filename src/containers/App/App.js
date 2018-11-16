import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../Contents/Contents';
import WorkerList from '../../components/WorkerList/WorkerList';
import Header from '../../components/Header/Header';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Sidebar />
        <WorkerList />
        <Content />
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(App);
