import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Avatar extends Component {
  render() {
    const { showIdNumber, avatar, className } = this.props;
    return (
      <div className={classNames('styles.className', className)}>
        <img src="" />
        <span>{avatar.name}</span>
        <span>{avatar.designation}</span>
        {!!showIdNumber && <span>{avatar.id}</span>}
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
