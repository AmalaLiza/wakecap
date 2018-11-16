import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../../containers/App/App.css';
class Sidebar extends Component {
    render() {
        return (
            <nav className={classNames(styles.box, styles.sidebar)}>
                <li>
                    Dashboard
                </li>
                <p>
                    Workers
                </p>
                <li>
                    Zones
                </li>
                <li>
                    Assign Helmets
                </li>
                <p>
                    Reports
                </p>
                <li>
                    Manage Sites
                </li>
                <li>
                    Settings
                </li>

            </nav>
        );
    }
}

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
