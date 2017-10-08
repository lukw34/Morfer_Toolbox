import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/navigation-button.scss';


const NavigationButton = ({name}) => (
    <div className={styles.navigationButton}>
        <div className={styles.arrow} /> {name}
    </div>
);

NavigationButton.propTypes = {
    name: PropTypes.string
};

export default NavigationButton;