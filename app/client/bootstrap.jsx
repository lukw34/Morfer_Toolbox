import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import BaseLayout from './modules/base/components/BaseLayout';
import './shared/assets/main.scss';

ReactDOM.render(
    <BrowserRouter>
        <Route
            to="/"
            component={BaseLayout}
        />
    </BrowserRouter>, document.getElementById('app'));
