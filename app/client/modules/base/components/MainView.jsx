import React from 'react';
import NavigationButton from './NavigationButton';

import styles from '../styles/main-view.scss';

const MainView = ({buttons = []}) => (
    <div className={styles.mainView}>
        <div className={styles.title}>
            Morfer Toolbox
        </div>
        <div className={styles.buttonContainer}>
            {buttons.map(button => (<NavigationButton
                key={button.name}
                {...button}
            />))}
        </div>
    </div>
);

MainView.propTypes = {
    buttons: React.PropTypes.arrayOf(React.PropTypes.shape({}))
};

export default MainView;