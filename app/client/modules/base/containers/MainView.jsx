import React from 'react';
import MainViewComponent from '../components/MainView';

class MainView extends React.Component {
    constructor(props) {
        super(props);

        this.buttons = [{
            name: 'Morfer',
            link: '/morfer',
            icon: ''
        }, {
            name: 'PatternMatching',
            link: '/patternMatching',
            icon: ''
        }, {
            name: 'API Docs',
            externalLink: '',
            icon: ''
        }];
    }

    render() {
        const props = {
            ...this.props,
            buttons: this.buttons
        };

        return <MainViewComponent {...props} />;
    }
}

export default MainView;