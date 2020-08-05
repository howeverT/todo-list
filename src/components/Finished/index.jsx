import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
import axios from 'axios'
class Finished extends React.Component {

    handeleMark = (id, status) => {
        let that = this;
        axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + `${id}`, { status: !status })
            .then((response) => {
                that.initStoreList()
            })
        // this.props.markItem(index)
        // console.log(index);
    }
    initStoreList = () => {
        let that = this;
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
            .then((response) => {
                let list = response.data
                that.props.fetchItem(list)
            })
    }

    render() {
        let arrayList = this.props.list.filter((item) => item.isDone === true)

        console.log(arrayList);
        return (<div>
            <br />
            {
                this.props.list.map((item, index) => (item.status ? <ToDoItem
                    key={index}
                    value={item.content}
                    id={item.id}
                    delete={this.handleDelete}
                    index={index}
                    mark={this.handeleMark}
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