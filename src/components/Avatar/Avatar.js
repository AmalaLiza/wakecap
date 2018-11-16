import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Avatar.css';
import Image from '../../assets/avatar.png';

class Avatar extends Component {
  render() {
    const { showIdNumber, avatar, className } = this.props;
    return (
      <div className={classNames(styles.avatar, className)}>
        <img className={styles.image} src={Image} />
        <div className={styles.details}>
          <div className={styles.name}>{avatar.name || 'Username'}</div>
          <div>{avatar.designation}</div>
        </div>
        {!!showIdNumber && <span className={styles.id}>{avatar.id}</span>}
      </div>
    );
  }
}

Avatar.propTypes = {
  showIdNumber: PropTypes.bool,
  className: PropTypes.string,
  avatar: PropTypes.shape({}),
};
Avatar.defaultProps = {

  showIdNumber: false,
  className: '',
  avatar: {},
};

export default Avatar;
