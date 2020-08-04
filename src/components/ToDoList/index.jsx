import React from 'react';
import ToDoItem from '../ToDoItem'
import { connect } from 'react-redux';
class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: "" };
    }

    handleInputString = (event) => {
        this.setState({
            inputValue:event.target.value
        })
    }

    handleAddInputIntem = () => {
        this.props.addItem(this.state.inputValue)
        // console.log(this.props.sum)
    }

    handleDelete = (index) =>{
        this.props.deleteItem(index)
    }
    
    handeleMark = (index) =>{
        this.props.markItem(index)
    }

    render() {
        console.log(this.props.list);
        return <div>
            <input type="text"  onBlur={this.handleInputString}></input> 
            <button onClick={this.handleAddInputIntem}>Add</button> 
            <br />
                {
                    this.props.list.map((item,index) => <ToDoItem
                        key={index}
                        value = {item.inputValue}
                        delete= {this.handleDelete}
                        index = {index}
                        mark = {this.handeleMark}
                        isDone = {item.isDone}
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
        addItem: (inputValue) => dispatch({type: 'ADDITEM', inputValue,isDone:false}),
        deleteItem: (index) => dispatch({type: 'DELETEITEM', index}),
        markItem: (index) => dispatch({type: 'MARKITEM', index})
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
// export default InputFeld