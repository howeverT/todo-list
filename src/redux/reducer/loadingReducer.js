import { LOADING, LOADING_END } from '../../constant/Constant'
export default (state = false, action) => {
    switch (action.type) {
        case LOADING:
            return true
        case LOADING_END: 
            return false
        default:
            return state
    }
}