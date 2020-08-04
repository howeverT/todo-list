import React from 'react';

class DisplayBox extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return <div>
            <span>{this.props.value}<input type="button" value="delete" onClick={() => this.props.delete(this.props.index)}></input>{this.props.index}</span>
        </div>
    }
}

export default DisplayBox