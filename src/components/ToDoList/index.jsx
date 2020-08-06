import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
import todoAPI from '../../api/Api'
import { Button } from "antd";
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { List } from 'antd';
import './todolist.css'
import { ADD_ITEM , DELETE_ITEM , MARK_ITEM , FETCH_ITEM} from '../../constant/Constant'
class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: "" };
        this.initStoreList();
    }

    initStoreList = () => {
        let that = this;
        todoAPI.get()
            .then((response) => {
                let list = response.data
                that.props.fetchItem(list)
            })
    }

    handleInputString = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleAddInputIntem = () => {
        let that = this;
        if (this.state.inputValue !== "") {
            todoAPI.post('' , { content: this.state.inputValue })
                .then((response) => {
                    that.initStoreList()
                    this.state.inputValue = ""
                })
        }

    }

    handleDelete = (id) => {
        let that = this;
        todoAPI.delete(`/${id}`)
            .then((response) => {
                that.initStoreList()
            })
    }

    handeleMark = (id, status) => {
        let that = this;
        todoAPI.put(`/${id}`)
            .then((response) => {
                that.initStoreList()
            })
    }



    render() {
        return <div>
            <Input id="input" placeholder="请输入内容" prefix={<UserOutlined />} onBlur={this.handleInputString} />
            <Button id="addButton" type="primary" shape="round" size={40} onClick={this.handleAddInputIntem}>
                Add
            </Button>
            <br />
            <List id="list"
                size="small"
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => <List.Item>{<ToDoItem
                    key={index}
                    value={item.content}
                    onDelete={this.handleDelete}
                    index={index}
                    id={item.id}
                    onMark={this.handeleMark}
                    isDone={item.status}
                />}</List.Item>}
            />


        </div>
    }
}

const mapStateToProps = state => {
    return { list: state.todo.itemList }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: (inputValue) => dispatch({ type: ADD_ITEM, inputValue, isDone: false }),
        deleteItem: (index) => dispatch({ type: DELETE_ITEM, index }),
        markItem: (index) => dispatch({ type: MARK_ITEM, index }),
        fetchItem: (list) => dispatch({ type: FETCH_ITEM, list })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);