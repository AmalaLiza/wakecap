import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Avatar.css';
import Image from '../../assets/avatar.png';

const Avatar = ({ showIdNumber, avatar, className, onClick }) => (
  <div
    className={classNames(styles.avatar, className, { [avatar.selected]: styles.selected })}
    onClick={() => onClick(avatar)}
  >
    <img className={styles.image} src={Image} />
    <div className={styles.details}>
      <div className={styles.name}>{avatar.name || 'Amala James'}</div>
      <div>{avatar.designation || 'Supervisor'}</div>
    </div>
    {!!showIdNumber && <span className={styles.id}>{avatar.id}</span>}
  </div>
);

Avatar.propTypes = {
  showIdNumber: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  avatar: PropTypes.shape({}),
};
Avatar.defaultProps = {

  showIdNumber: false,
  className: '',
  onClick: f => f,
  avatar: {},
};

export default Avatar;
