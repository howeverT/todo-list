import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
import axios from 'axios'
class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: "" };
        this.initStoreList();
    }

    initStoreList = () => {
        let that = this;
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
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
        axios.post('https://5e9ec500fb467500166c4658.mockapi.io/todos/', { content: this.state.inputValue })
            .then((response) => {
                that.initStoreList()
            })
        //this.props.addItem(this.state.inputValue)
        // console.log(this.props.sum)
    }

    handleDelete = (id) => {
        let that = this;
        axios.delete('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + `${id}`)
            .then((response) => {
                that.initStoreList()
            })
    }

    handeleMark = (id, status) => {
        let that = this;
        axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + `${id}`, { status: !status })
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
                    isDone={item.status}
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