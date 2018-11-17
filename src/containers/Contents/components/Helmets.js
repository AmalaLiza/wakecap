import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Contents.css';
import Clock from '../../../assets/clock.png';
import ID from '../../../assets/id.png';
import Helmet from '../../../assets/helmet.png';

const Icon = ({ text, icon }) => (
  <div className={styles.iconWrapper}>
    <img className={styles.icon} src={icon} />
    <span className={styles.text}>{text}</span>
  </div>
);

Icon.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};
Icon.defaultProps = {
  text: '',
  icon: '',
};

const Helmets = ({ helmets }) => (
  <div className={styles.boxWrapper}>
    {helmets.map(helmet => (
      <div
        key={helmet.days}
        className={styles.box}
      >
        <Icon text={`# ${helmet.time || 456789}`} icon={Clock} />
        <Icon text={`IN -${helmet.id || 6789} `} icon={ID} />
        <Icon text={`${helmet.days || 1} days ago`} icon={Helmet} />
      </div>
    ))}
    <button className={styles.plus}>+</button>
  </div>
);

Helmets.propTypes = {
  helmets: PropTypes.array,
};
Helmets.defaultProps = {
  helmets: [],
};

export default Helmets;
