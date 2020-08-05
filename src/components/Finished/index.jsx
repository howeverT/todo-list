import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
import axios from 'axios'
import {API} from '../../api/Api'
class Finished extends React.Component {

    handeleMark = (id, status) => {
        let that = this;
        axios.put(API+ '/' + `${id}`, { status: !status })
            .then((response) => {
                that.initStoreList()
            })
        // this.props.markItem(index)
        // console.log(index);
    }

    handleDelete = (id) => {
        let that = this;
        axios.delete(API+'/' + `${id}`)
            .then((response) => {
                that.initStoreList()
            })
    }

    initStoreList = () => {
        let that = this;
        axios.get(API)
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