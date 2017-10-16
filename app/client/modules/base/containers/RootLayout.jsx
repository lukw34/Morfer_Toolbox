import React from 'react';
import RootLayoutComponent from '../components/RootLayout';

class RootLayout extends React.Component {
    buttons = [{
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
        link: '',
        icon: ''
    }];

    render() {
        const props = {
            ...this.props,
            buttons: this.buttons
        };

        return <RootLayoutComponent {...props} />;
    }
}

export default RootLayout;