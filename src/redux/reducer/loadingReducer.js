export default (state = false, action) => {
    switch (action.type) {
        case 'LOADING':
            return true
        case 'LOADINGEND':
            return false
        default:
            return state
    }
}