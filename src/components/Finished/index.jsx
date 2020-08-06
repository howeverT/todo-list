import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
import todoAPI from '../../api/Api'
import { List } from 'antd';
import { ADD_ITEM , DELETE_ITEM , MARK_ITEM , FETCH_ITEM} from '../../constant/Constant'
class Finished extends React.Component {
    constructor(props) {
        super(props)
        this.initStoreList()
    }

    handeleMark = (id, status) => {
        let that = this;
        todoAPI.put(`/${id}`)
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
        todoAPI.get()
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
            
        </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(Finished);