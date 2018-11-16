import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import styles from './App.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../Contents/Contents';
import WorkerList from '../../components/WorkerList/WorkerList';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className={styles.wrapper}>

        <header className={classNames(styles.header)}>Header</header>
        <Sidebar />
        <WorkerList />
        <Content />
        <footer className={classNames(styles.footer)}>Footer</footer>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(App);
