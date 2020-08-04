import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
class Finished extends React.Component {

    handeleMark = (index) => {
        this.props.markItem(index)
    }

    render() {
        let arrayList = this.props.list.filter((item) => item.isDone === true)

        console.log(arrayList);
        return (<div>
            <br />
            {
                arrayList.map((item, index) => <ToDoItem
                    key={index}
                    value={item.inputValue}
                    delete={this.handleDelete}
                    index={index}
                    mark={this.handeleMark}
                    isDone={item.isDone}
                />)
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
        markItem: (index) => dispatch({ type: 'MARKITEM', index })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finished);