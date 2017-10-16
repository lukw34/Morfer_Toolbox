import React from 'react';
import PropTypes from 'prop-types';

import NavigationButton from './NavigationButton';

import styles from '../styles/root-layout.styles.scss';

const RootLayout = ({buttons = []}) => (
    <div className={styles.container}>
        <div className={styles.buttonContainer}>
            {buttons.map(button => (<NavigationButton
                key={button.name}
                {...button}
            />))}
        </div>
    </div>
);

RootLayout.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.shape({}))
};

export default RootLayout;