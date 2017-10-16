import React from 'react';

import MorferTexAreaComponent from '../component/MorferTextArea';

class MorferTextArea extends React.Component {
    state = {
        sample: ''
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(sample) {
        this.setState({sample});
    }

    render() {
        const {sample} = this.state,
            props = {
                sample,
                onChange: this.onChange
            };
        return <MorferTexAreaComponent {...props} />
    }
}

export default MorferTextArea;