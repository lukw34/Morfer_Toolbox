import React from 'react';

import MorferTextArea from '../containers/MorferTextArea';

import styles from '../styles/morfer-layout.styles.scss';

const MorferLayout = () => (
    <div className={styles.container}>
        <MorferTextArea />
    </div>
);


export default MorferLayout;