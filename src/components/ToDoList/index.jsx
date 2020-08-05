import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
import axios from 'axios'
import {API} from '../../api/Api'
class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: "" };
        this.initStoreList();
    }

    initStoreList = () => {
        let that = this;
        axios.get(API)
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

    handleAddInputIntem = () => {  //TODO api
        let that = this;
        axios.post(API, { content: this.state.inputValue })
            .then((response) => {
                that.initStoreList()
            })
        //this.props.addItem(this.state.inputValue)
        // console.log(this.props.sum)
    }

    handleDelete = (id) => {
        let that = this;
        axios.delete(API+'/' + `${id}`)
            .then((response) => {
                that.initStoreList()
            })
    }

    handeleMark = (id, status) => {
        let that = this;
        axios.put(API+'/' + `${id}`, { status: !status })
            .then((response) => {
                that.initStoreList()
            })
        //this.props.markItem(index)
        //console.log(index)
    }

    render() {
        console.log(this.props.list);
        return <div>
            <input type="text" onBlur={this.handleInputString}></input>
            <button onClick={this.handleAddInputIntem}>Add</button>
            <br />
            {
                this.props.list.map((item, index) => <ToDoItem
                    key={index}
                    value={item.content}
                    delete={this.handleDelete}
                    index={index}
                    id={item.id}
                    mark={this.handeleMark}
                    isDone={item.status}  //TODO on
                />)
            }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);