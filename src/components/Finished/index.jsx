import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
import axios from 'axios'
import todoAPI from '../../api/Api'
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
        return (<div>
            <br />
            {
                this.props.list.map((item, index) => (item.status ? <ToDoItem
                    key={index}
                    value={item.content}
                    id={item.id}
                    onDelete={this.handleDelete}
                    index={index}
                    onMark={this.handeleMark}
                    isDone={item.status}
                /> : ""))
            }
        </div>);
    }
}

const mapStateToProps = state => {
    return { list: state.itemList }
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