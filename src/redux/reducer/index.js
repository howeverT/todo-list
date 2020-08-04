import { act } from "react-dom/test-utils"

const initState = {
    itemList: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'ADDITEM':
            return {
                itemList: state.itemList.concat({ inputValue: action.inputValue, isDone: action.isDone })
            }
        case 'DELETEITEM':
            return {
                itemList: state.itemList.filter((item, index) => action.index !== index)
            }
        case 'MARKITEM':
            return  {itemList: state.itemList.map((item,index)=>{
                if(index==action.index){
                    item.isDone = !item.isDone;
                }
                return item;
            })}
        default:
            return state
    }
}