import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from '../styles/navigation-button.styles.scss';


const NavigationButton = ({name, link}) => (
    <Link to={link} className={styles.navigationButton}>
        <div
            className={styles.arrow}
        />
        {name}
    </Link>
);

NavigationButton.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string
};

export default NavigationButton;