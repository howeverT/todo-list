import { ADD_ITEM , DELETE_ITEM , MARK_ITEM , FETCH_ITEM} from '../../constant/Constant'
const initState = {
    itemList: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                itemList: state.itemList.concat({ inputValue: action.inputValue, isDone: action.isDone })
            }
        case DELETE_ITEM:
            return {
                itemList: state.itemList.filter((item, index) => action.index !== index)
            }
        case MARK_ITEM:
            return {
                itemList: state.itemList.map((item, index) => {
                    if (index == action.index) {
                        item.isDone = !item.isDone;
                    }
                    return item;
                })
            }
        case FETCH_ITEM:
            let result = {
                itemList: action.list
            }
            return result
        default:
            return state
    }
}