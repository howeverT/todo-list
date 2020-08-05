import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
import todoAPI from '../../api/Api'
import { List } from 'antd';
class Finished extends React.Component {

    handeleMark = (id, status) => {
        let that = this;
        todoAPI.put(`/${id}`, { status: !status })
            .then((response) => {
                that.initStoreList()
            })
    }

    handleDelete = (id) => {
        let that = this;
        todoAPI.delete(`/${id}`)
            .then((response) => {
                that.initStoreList()
            })
    }

    initStoreList = () => {
        let that = this;
        todoAPI.get('')
            .then((response) => {
                let list = response.data
                that.props.fetchItem(list)
            })
    }

    render() {
        const arrayList = this.props.list.filter((item, index) => item.status === true)
        return (<div>
            <br />
            <List id="list"
                size="small"
                bordered
                dataSource={arrayList}
                renderItem={(item,index) => <List.Item>{<ToDoItem
                    key={index}
                    value={item.content}
                    id={item.id}
                    onDelete={this.handleDelete}
                    index={index}
                    onMark={this.handeleMark}
                    isDone={item.status}
                />}</List.Item>}
            />
            {/* {
                this.props.list.map((item, index) => (item.status ? <ToDoItem
                    key={index}
                    value={item.content}
                    id={item.id}
                    onDelete={this.handleDelete}
                    index={index}
                    onMark={this.handeleMark}
                    isDone={item.status}
                /> : ""))
            } */}
        </div>);
    }
}

const mapStateToProps = state => {
    return { list: state.todo.itemList }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: (inputValue) => dispatch({ type: 'ADDITEM', inputValue, isDone: false }),
        deleteItem: (index) => dispatch({ type: 'DELETEITEM', index }),
        markItem: (index) => dispatch({ type: 'MARKITEM', index }),
        fetchItem: (list) => dispatch({ type: 'FETCHITEM', list })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finished);