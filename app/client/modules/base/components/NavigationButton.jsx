import React from 'react';

import styles from '../styles/navigation-button.scss';


const NavigationButton = ({name}) => (
    <div className={styles.navigationButton}>
        <div className={styles.arrow} /> {name}
    </div>
);

NavigationButton.propTypes = {
    name: React.PropTypes.string
};

export default NavigationButton;