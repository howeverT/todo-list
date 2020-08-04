import React from 'react';
import DisplayBox from '../DisplayBox'
import { connect } from 'react-redux';
class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: "" };
    }

    inputString = (event) => {
        this.setState({
            inputValue:event.target.value
        })
    }

    addInputIntem = () => {
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
            <input type="text"  onBlur={this.inputString}></input> 
            <button onClick={this.addInputIntem}>Add</button> 
            <br />
                {
                    this.props.list.map((item,index) => <DisplayBox
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
    
export default connect(mapStateToProps, mapDispatchToProps)(InputField);
// export default InputFeld