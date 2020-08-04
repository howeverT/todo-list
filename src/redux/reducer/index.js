
const initState = {
    itemList:[]
}
export default (state = initState, action) => {
    console.log(action.inputValue);
    switch (action.type) {
        case 'ADDITEM':
            return {
                itemList: state.itemList.concat(action.inputValue)
                // itemList: [...state.itemList, action.inputValue]
            }
        default:
            return state
    }
}