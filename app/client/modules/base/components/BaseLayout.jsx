import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom';

import StartLayout from '../containers/RootLayout';
import MorferLayout from '../../morfer/component/MorferLayout';

import styles from '../styles/base-layout.styles.scss';

const BaseLayout = ({match: {isExact}}) => (
    <div className={styles.base}>
        <div className={`${styles.title} ${!isExact ? styles.titleAsHeader : ' '}`}>
            <span>Morfer Toolbox</span>
        </div>
        <Switch>
            <Route
                exact
                path="/"
                component={StartLayout}
            />
            <Route
                exact
                path="/morfer"
                component={MorferLayout}
            />
            <Redirect to="/" />
        </Switch>
    </div>
);

BaseLayout.propTypes = {
    match: PropTypes.shape({
        isExact: PropTypes.bool
    })

};


export default BaseLayout;