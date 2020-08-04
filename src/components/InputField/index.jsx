import React from 'react';
import DisplayBox from '../DisplayBox'
class InputField extends React.Component {
    render() {
        return <div>
            <input type="text"></input> <input type="button" value="add"></input>
            <br>
            </br>
            <DisplayBox />
        </div>
    }
}

export default InputField