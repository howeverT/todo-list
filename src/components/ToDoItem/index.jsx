import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './todoitem.css'  
class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return <div class="item">
            <span style={{ textDecorationLine: this.props.isDone ? 'line-through' : 'none' }}
                onClick={() => this.props.onMark(this.props.id, this.props.isDone)}>{this.props.value}
            </span>
            <Button id="delete" type="primary" shape="circle" icon={<DeleteOutlined onClick={() => this.props.onDelete(this.props.id)} />} />
            
        </div>
    }
}

export default ToDoItem