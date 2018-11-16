import React, { Component } from 'react';
import classNames from 'classnames';
import styles from '../App/App.css';
import Avatar from '../../components/Avatar/Avatar';

class Contents extends Component {
  render() {
    let { user } = this.props;
    user = {
      name: 'Current User',
      designation: 'Designation',
    };
    const supervisor = {
      name: 'Current User',
      designation: 'Designation',
    };
    return (
      <div className={classNames(styles.box, styles.content)}>
          Content
        <section>
          <Avatar avatar={user} />
          <div>
            <span>Asset ID</span>
:
            <span>3456ERTYU</span>
            <span>Tag ID</span>
:
            <span>345678</span>
          </div>
          <Avatar className="reverse" avatar={supervisor} />
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

          <h2>Title</h2>
          <p>Paragraph example.</p>
          <p>Paragraph example.</p>
          <p>Paragraph example.</p>

          <div className="box">
            <p>Paragraph example.</p>
            <p>Paragraph example.</p>
          </div>
        </section>
        <section />
      </div>
    );
  }
}

Contents.propTypes = {};
Contents.defaultProps = {};

export default Contents;
