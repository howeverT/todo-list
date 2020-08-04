
const initState = {
    itemList: []
}
export default (state = initState, action) => {
    console.log(action.index);
    switch (action.type) {
        case 'ADDITEM':
            return {
                itemList: state.itemList.concat(action.inputValue)
                // itemList: [...state.itemList, action.inputValue]
            }
        case 'DELETEITEM':
            return {
                itemList: state.itemList.filter((item, index) => action.index !== index)
                // itemList: [...state.itemList, action.inputValue]
            }
        default:
            return state
    }
}