import todo from '../reducer'
import loading from '../reducer/loadingReducer'
import { createStore,combineReducers } from 'redux'

const store = createStore(combineReducers({todo,loading}))

export default store