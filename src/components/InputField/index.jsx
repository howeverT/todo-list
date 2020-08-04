import React from 'react';
import DisplayBox from '../DisplayBox'
class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: ""};
    }
    render() {
        return <div>
            <input type="text" value={this.state.inputValue}></input> <input type="button" value="add"></input>
            <br>
            </br>
            <DisplayBox />
        </div>
    }
}

export default InputField