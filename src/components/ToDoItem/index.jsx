import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return <div>
            <span  style={{ textDecorationLine: this.props.isDone ? 'line-through' : 'none' }} onClick={() => this.props.mark(this.props.index)}>{this.props.value}</span><input type="button" value="delete" onClick={() => this.props.delete(this.props.index)}></input>{this.props.index}
        </div>
    }
}

export default ToDoItem