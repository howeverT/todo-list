import React from 'react';

class DisplayBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0};
    }


    render() {
        return <div>
            <span>{this.state.value}<input type="button" value="delete"></input></span>
        </div>
    }
}

export default DisplayBox