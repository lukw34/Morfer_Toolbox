import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/morfer-textarea.styles.scss';

const MorferTextArea = ({sample, onChange}) => (
    <div className={styles.morferTextAreaContainer}>
        <div className={styles.textAreaContainer}>
                <textarea
                    className={styles.textArea}
                    name="sample"
                    onChange={onChange}
                >{sample}
                </textarea>
        </div>
        <div>button</div>
    </div>
);


export default MorferTextArea;